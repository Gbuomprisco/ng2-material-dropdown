import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../components/menu-item/ng2-menu-item';

export class Ng2DropdownState {
    public onItemSelected: EventEmitter<Ng2MenuItem> = new EventEmitter<Ng2MenuItem>();
    public onItemClicked: EventEmitter<Ng2MenuItem> = new EventEmitter<Ng2MenuItem>();
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
     * @name selects a menu item and emits event
     * @param item {Ng2MenuItem}
     * @param dispatchEvent {boolean}
     */
    public select(item: Ng2MenuItem, dispatchEvent = true): void {
        this._selectedItem = item;

        if (!dispatchEvent) {
            return;
        }

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
