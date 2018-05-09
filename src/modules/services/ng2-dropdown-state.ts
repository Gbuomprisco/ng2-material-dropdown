import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../components/menu-item/ng2-menu-item';
export class Ng2DropdownState {
    public onItemSelected: EventEmitter<Ng2MenuItem> = new EventEmitter<Ng2MenuItem>();
    public onItemClicked: EventEmitter<Ng2MenuItem> = new EventEmitter<Ng2MenuItem>();
    public onItemDestroyed: EventEmitter<Ng2MenuItem> = new EventEmitter<Ng2MenuItem>();

    private _selectedItem: Ng2MenuItem;

    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     */
    public get selectedItem(): Ng2MenuItem {
        return this._selectedItem;
    }

    /**
     * @name selects a menu item and emits event
     * @param item
     */
    public select(item: Ng2MenuItem | undefined, dispatchEvent = true): void {
        this._selectedItem = item;

        if (!dispatchEvent || !item) {
            return;
        }

        item.focus();

        this.onItemSelected.emit(item);
    }

    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    public unselect(): void {
        this._selectedItem = undefined;
    }
}
