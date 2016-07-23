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

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2Dropdown } from '../dropdown/ng2-dropdown';

import { animations } from './animations';
import { ACTIONS } from './actions';

import { Ng2DropdownMenuComponent } from '../../typings/ng2-dropdown-menu.d.ts';
import { Ng2MenuItemComponent } from '../../typings/ng2-menu-item.d.ts';


@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown-menu',
    styles: [require('./style.scss').toString()],
    template: require('./template.html'),
    animations
})
export class Ng2DropdownMenu implements Ng2DropdownMenuComponent {

    // possible values: 2, 4, 6
    @Input() public width: number = 4;
    @Input() public focusFirstElement: boolean = true;
    @Input() public offset: string;

    /**
     * @name items
     * @type {QueryList<Ng2MenuItem>}
     */
    @ContentChildren(Ng2MenuItem) public items: QueryList<Ng2MenuItemComponent>;

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

    constructor(@Inject(forwardRef(() => Ng2Dropdown)) private dropdown: Ng2Dropdown,
                private element: ElementRef,
                private renderer: Renderer) {}

    /**
     * @name show
     * @shows menu and selects first item
     */
    public show(focus = true): void {
        this.renderer.setElementStyle(this.getMenuElement(), 'display', 'block');

        // update state
        this.state.isVisible = true;

        // select first item unless user disabled this option
        if (this.focusFirstElement) {
            this.dropdown.state.select(this.items.first, false);
        }

        if (focus) {
            // focus element
            this.focusMenuElement();
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
        const element = this.getMenuElement();
        const {top, left} = this.calcPositionOffset(position);

        this.renderer.setElementStyle(element, 'top', top);
        this.renderer.setElementStyle(element, 'left', left);
    }

    /**
     * @name handleKeypress
     * @desc executes functions on keyPress based on the key pressed
     * @param $event
     */
    public handleKeypress($event): void {
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
     * @name focusMenuElement
     * @desc calls focus method on the menu
     */
    private focusMenuElement(element: Element = this.getMenuElement()): void {
        this.renderer.invokeElementMethod(element, 'focus', []);
    }

    /**
     * @name calcPositionOffset
     * @param position
     * @returns {{top: string, left: string}}
     */
    private calcPositionOffset(position): {top: string, left: string} {
        let top = `${position.top + window.scrollY - 15}px`,
            left = `${position.left + window.scrollX - 5}px`;

        if (this.offset) {
            const offset = this.offset.split(' ');

            if (!offset[1]) {
                offset[1] = '0';
            }

            top = `${parseInt(top.replace('px', '')) + parseInt(offset[0])}px`;
            left = `${parseInt(left.replace('px', '')) + parseInt(offset[1])}px`;
        }

        return {top, left};
    }

    ngOnInit() {
        // append menu element to the body
        const body = document.querySelector('body');
        body.appendChild(this.element.nativeElement);
    }
}
