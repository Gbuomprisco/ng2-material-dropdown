import {
    Component,
    Input,
    Inject,
    forwardRef
} from '@angular/core';

import { Ng2Dropdown } from '../dropdown/ng2-dropdown';

@Component({
    selector: 'ng2-menu-item',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2MenuItem {
    /**
     * @preventClose
     * @desc if true, clicking on the item won't close the dropdown
     * @type {boolean}
     */
    @Input() public preventClose: boolean = false;

    /**
     * @name value
     * @desc any value associated to the item
     * @type {any}
     */
    @Input() public value: any;

    constructor(@Inject(forwardRef(() => Ng2Dropdown)) private dropdown: Ng2Dropdown) {}

    /**
     * @name isSelected
     * @desc returns current selected item
     * @returns {boolean}
     */
    public get isSelected(): boolean {
        return this === this.dropdown.state.selectedItem;
    }

    /**
     * @name click
     * @desc emits select event
     */
    public select(): void {
        this.dropdown.state.select(this, true);
    }

    /**
     * @name click
     * @desc emits click event
     */
    public click(): void {
        this.dropdown.state.onItemClicked.emit(this);
    }
}
