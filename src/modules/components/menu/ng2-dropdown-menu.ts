import {
    Component,
    ElementRef,
    Renderer,
    ContentChildren,
    QueryList,
    forwardRef,
    Inject,
    Input,
    trigger,
    style,
    transition,
    animate,
    state
} from '@angular/core';

import { ACTIONS } from './actions';

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2Dropdown } from '../dropdown/ng2-dropdown';
import { DropdownStateService } from '../../services/dropdown-state.service';

@Component({
    selector: 'ng2-dropdown-menu',
    styleUrls: ['style.scss'],
    templateUrl: 'template.html',
    animations: [
        trigger('fade', [
            state('visible', style({
                width: '100%',
                maxHeight: '350px',
                opacity: 1
            })),
            state('hidden', style({
                width: '0px',
                maxHeight: '0px',
                opacity: 0
            })),
            transition('visible => hidden', [
                animate('100ms ease-out')
            ]),
            transition('hidden => visible', [
                animate('150ms cubic-bezier(0.55, 0, 0.55, 0.2)')
            ])
        ])
    ]
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

    private position: ClientRect;
    private listener;

    constructor(private state: DropdownStateService,
                private element: ElementRef,
                private renderer: Renderer) {}

    /**
     * @name show
     * @shows menu and selects first item
     */
    public show(): void {
        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'block');

        // update state
        this.state.menuState.isVisible = true;

        // select first item unless user disabled this option
        if (this.focusFirstElement) {
            this.state.dropdownState.select(this.items.first, false);
        }
    }

    /**
     * @name hide
     * @desc hides menu
     */
    public hide(): void {
        this.state.menuState.isVisible = false;

        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'none');

        // reset selected item state
        this.state.dropdownState.unselect();
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
        if (this.state.menuState.isVisible === false) {
            return;
        }

        const key = $event.keyCode,
            items = this.items.toArray(),
            index = items.indexOf(this.state.dropdownState.selectedItem);

        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }

        ACTIONS[key].call(this, index, items, this.state.dropdownState);

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
    private calcPositionOffset(position): { top: string, left: string } {
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

        return { top, left };
    }

    private applyOffset(top: string, left: string): { top: string, left: string } {
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
        if (this.state.menuState.isVisible === true) {
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
