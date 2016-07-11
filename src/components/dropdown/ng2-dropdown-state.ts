import {
    Output,
    EventEmitter,
    Injectable
} from '@angular/core';

import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownStateServiceInterface } from './ng2-dropdown.d';

let selectedItem;

@Injectable()
export class DropdownState implements Ng2DropdownStateServiceInterface {
    @Output() public onItemSelected = new EventEmitter<Ng2MenuItem>();
    @Output() public onItemClicked = new EventEmitter<Ng2MenuItem>();

    /**
     * @name selectedItem
     * @desc getter for _selectedItem
     * @returns {Ng2MenuItem}
     */
    public getSelectedItem(): Ng2MenuItem {
        return selectedItem;
    }

    /**
     * @name selects a menu item and emits event
     * @param item {Ng2MenuItem}
     * @param dispatchEvent {boolean}
     */
    public select(item: Ng2MenuItem, dispatchEvent = true): void {
        selectedItem = item;

        if (dispatchEvent) {
            this.onItemSelected.emit(item);
        }
    }

    /**
     * @name unselect
     * @desc sets _selectedItem as undefined
     */
    public unselect(): void {
        selectedItem = undefined;
    }
}
