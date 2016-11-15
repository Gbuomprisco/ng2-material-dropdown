import {
    Component,
    ElementRef,
    Renderer,
    ContentChildren,
    QueryList,
    forwardRef,
    Inject,
    Input
} from '@angular/core';

import { animations } from './animations';
import { ACTIONS } from './actions';

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2Dropdown } from '../dropdown/ng2-dropdown';

@Component({
    selector: 'ng2-dropdown-menu',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    animations
})
export class Ng2DropdownMenu {

    // possible values: 2, 4, 6
    @Input() public width: number = 4;
    @Input() public focusFirstElement: boolean = true;
    @Input() public offset: string;

    /**
     * @name items
     * @type {QueryList<Ng2MenuItem>}
     */
    @ContentChildren(Ng2MenuItem) public items: QueryList<Ng2MenuItem>;

    /**
     * @name state
     * @type {{isVisible: boolean, toString: (function(): string)}}
     */
    public state = {
        isVisible: false,

        /**
         * @returns current state as a string visible|hidden
         * @returns {string|string}
         */
        toString: (): string => {
            return this.state.isVisible ? 'visible' : 'hidden';
        }
    };

    private position: ClientRect;
    private listener;

    constructor(@Inject(forwardRef(() => Ng2Dropdown)) private dropdown: Ng2Dropdown,
                private element: ElementRef,
                private renderer: Renderer) {}

    /**
     * @name show
     * @shows menu and selects first item
     */
    public show(): void {
        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'block');

        // update state
        this.state.isVisible = true;

        // select first item unless user disabled this option
        if (this.focusFirstElement) {
            this.dropdown.state.select(this.items.first, false);
        }
    }

    /**
     * @name hide
     * @desc hides menu
     */
    public hide(): void {
        this.state.isVisible = false;

        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'none');

        // reset selected item state
        this.dropdown.state.unselect();
    }

    /**
     * @name updatePosition
     * @desc updates the menu position every time it is toggled
     * @param position {ClientRect}
     */
    public updatePosition(position: ClientRect): void {
        this.position = position;
        this.ngDoCheck();
    }

    /**
     * @name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param $event
     */
    public handleKeypress($event): void {
        if (!this.state.isVisible) {
            return;
        }

        const key = $event.keyCode,
            items = this.items.toArray(),
            index = items.indexOf(this.dropdown.state.selectedItem);

        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }

        ACTIONS[key].call(this, index, items, this.dropdown.state);

        $event.preventDefault();
    }

    /**
     * @name getMenuElement
     * @returns {Element}
     */
    private getMenuElement(): Element {
        return this.element.nativeElement.children[0];
    }

    /**
     * @name calcPositionOffset
     * @param position
     * @returns {{top: string, left: string}}
     */
    private calcPositionOffset(position): {top: string, left: string} {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

        let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        let { top, left } = this.applyOffset(
            `${position.top + y - 15}px`,
            `${position.left + x - 5}px`
        );

        const element = this.getMenuElement(),
            clientWidth = element.clientWidth,
            clientHeight = element.clientHeight,

            marginFromBottom = parseInt(top) + clientHeight,
            marginFromRight = parseInt(left) + clientWidth,

            windowScrollHeight = window.innerHeight + window.scrollY,
            windowScrollWidth = window.innerWidth + window.scrollX;

        if (marginFromBottom >= windowScrollHeight) {
            top = `${parseInt(top.replace('px', '')) - clientHeight}px`;
        }

        if (marginFromRight >= windowScrollWidth) {
            const marginRight = marginFromRight - windowScrollWidth + 30;
            left = `${parseInt(left.replace('px', '')) - marginRight}px`;
        }

        return {top, left};
    }

    private applyOffset(top: string, left: string): {top: string, left: string} {
        if (!this.offset) {
            return { top, left };
        }

        const offset = this.offset.split(' ');

        if (!offset[1]) {
            offset[1] = '0';
        }

        top = `${parseInt(top.replace('px', '')) + parseInt(offset[0])}px`;
        left = `${parseInt(left.replace('px', '')) + parseInt(offset[1])}px`;

        return { top, left };
    }

    ngOnInit() {
        // append menu element to the body
        const body = document.querySelector('body');
        body.appendChild(this.element.nativeElement);

        this.listener = this.renderer.listen(body, 'keyup', this.handleKeypress.bind(this));
    }

    ngDoCheck() {
        if (this.state.isVisible) {
            const element = this.getMenuElement();
            const {top, left} = this.calcPositionOffset(this.position);

            this.renderer.setElementStyle(element, 'top', top);
            this.renderer.setElementStyle(element, 'left', left);
        }
    }

    ngOnDestroy() {
        const elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);

        if (this.listener) {
            this.listener();
        }
    }
}
