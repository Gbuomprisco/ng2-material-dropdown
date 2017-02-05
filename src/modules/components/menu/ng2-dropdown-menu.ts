import {
    Component,
    ElementRef,
    Renderer,
    ContentChildren,
    QueryList,
    Input,
    trigger,
    style,
    transition,
    animate,
    keyframes,
    state
} from '@angular/core';

import { ACTIONS, arrowKeysHandler } from './actions';

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { DropdownStateService } from '../../services/dropdown-state.service';

@Component({
    selector: 'ng2-dropdown-menu',
    styleUrls: [ './style.scss' ],
    templateUrl: './template.html',
    animations: [
        trigger('fade', [
            state('visible', style({opacity: '1', height: '*', width: '*', display: 'block'})),
            state('hidden', style({opacity: '0', height: '0', width: '0', display: 'none'})),
            transition('hidden => visible', [
                animate(200, keyframes([
                    style({opacity: 0, offset: 0, height: '0', width: '0'}),
                    style({opacity: 1, offset: 1, height: '*', width: '*'}),
                ]))
            ]),
            transition('visible => hidden', [
                animate(200, keyframes([
                    style({opacity: 1, offset: 0}),
                    style({opacity: 0.5, offset: 0.5}),
                    style({opacity: 0, offset: 1, height: '0', width: '0'}),
                ]))
            ])
        ])
    ]
})
export class Ng2DropdownMenu {
    /**
     * @name width
     * @type {number} [2, 4, 6]
     */
    @Input() public width: number = 4;

    /**
     * @description if set to true, the first element of the dropdown will be automatically focused
     * @name focusFirstElement
     * @type {boolean}
     */
    @Input() public focusFirstElement: boolean = true;

    /**
     * @description sets dropdown offset from the button
     * @name offset {string} follow format '<number> <number>' ex. '0 20'
     */
    @Input() public offset: string;

    /**
     * @name appendToBody
     * @type {boolean}
     */
    @Input() public appendToBody: boolean = true;

    /**
     * @name items
     * @type {QueryList<Ng2MenuItem>}
     */
    @ContentChildren(Ng2MenuItem) public items: QueryList<Ng2MenuItem>;

    private position: ClientRect;
    private listener;

    constructor(public state: DropdownStateService,
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

        window.addEventListener('keydown', arrowKeysHandler, false);
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

        window.removeEventListener('keydown', arrowKeysHandler, false);
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

        const key = $event.keyCode;
        const items = this.items.toArray();
        const index = items.indexOf(this.state.dropdownState.selectedItem);

        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }

        ACTIONS[key].call(this, index, items, this.state.dropdownState);

        $event.preventDefault();
        $event.stopPropagation();
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
        if (!position) {
            return;
        }

        const supportPageOffset = window.pageXOffset !== undefined;
        const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

        const x = supportPageOffset ? window.pageXOffset : isCSS1Compat ?
            document.documentElement.scrollLeft : document.body.scrollLeft;

        const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ?
            document.documentElement.scrollTop : document.body.scrollTop;

        let { top, left } = this.applyOffset(
            `${position.top + y - 15}px`,
            `${position.left + x - 5}px`
        );

        const element = this.getMenuElement();
        const clientWidth = element.clientWidth;
        const clientHeight = element.clientHeight;

        const marginFromBottom = parseInt(top) + clientHeight;
        const marginFromRight = parseInt(left) + clientWidth;

        const windowScrollHeight = window.innerHeight + window.scrollY;
        const windowScrollWidth = window.innerWidth + window.scrollX;

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
        const body = document.querySelector('body');

        if (this.appendToBody) {
            // append menu element to the body
            body.appendChild(this.element.nativeElement);
        }

        this.listener = this.renderer.listen(body, 'keyup', this.handleKeypress.bind(this));
    }

    ngDoCheck() {
        if (!(this.state.menuState.isVisible && this.position)) {
            return;
        }

        const element = this.getMenuElement();
        const position = this.calcPositionOffset(this.position);

        if (position) {
            this.renderer.setElementStyle(element, 'top', position.top);
            this.renderer.setElementStyle(element, 'left', position.left);
        }

        // select first item unless user disabled this option
        if (this.focusFirstElement &&
            this.items.first &&
            !this.state.dropdownState.selectedItem) {
                this.state.dropdownState.select(this.items.first, false);
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
