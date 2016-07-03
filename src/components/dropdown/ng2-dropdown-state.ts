import {
    Output,
    EventEmitter
} from '@angular/core';

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownStateServiceInterface } from './ng2-dropdown.d';

class Ng2DropdownState implements Ng2DropdownStateServiceInterface {
    @Output() public onItemClicked = new EventEmitter<Ng2MenuItem>();
    @Output() public onItemSelected = new EventEmitter<Ng2MenuItem>();

    private _selectedItem: Ng2MenuItem;

    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     * @returns {Ng2MenuItem}
     */
    public get selectedItem(): Ng2MenuItem {
        return this._selectedItem;
    }

    /**
     * @name selectedItem
     * @desc setter for _selectedItem
     * @param item
     */
    public set selectedItem(item: Ng2MenuItem) {
        this._selectedItem = item;
    }

    /**
     * @name selects a menu item and emits event
     * @param item {Ng2MenuItem}
     */
    public select(item: Ng2MenuItem): void {
        this.selectedItem = item;
        this.onItemSelected.emit(item);
    }

    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    public unselect(): void {
        this.selectedItem = undefined;
    }
}

const dropdownState = new Ng2DropdownState();
export { dropdownState };
