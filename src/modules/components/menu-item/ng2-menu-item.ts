import {
    Component,
    Input
} from '@angular/core';

import { DropdownStateService } from '../../services/dropdown-state.service';

@Component({
    selector: 'ng2-menu-item',
    styleUrls: [ './style.scss' ],
    templateUrl: './template.html'
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

    constructor(private state: DropdownStateService) {}

    /**
     * @name isSelected
     * @desc returns current selected item
     * @returns {boolean}
     */
    public get isSelected(): boolean {
        return this === this.state.dropdownState.selectedItem;
    }

    /**
     * @name click
     * @desc emits select event
     */
    public select(): void {
        this.state.dropdownState.select(this, true);
    }

    /**
     * @name click
     * @desc emits click event
     */
    public click(): void {
        this.state.dropdownState.onItemClicked.emit(this);
    }
}
