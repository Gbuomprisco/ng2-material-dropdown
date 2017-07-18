import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../components/menu-item/ng2-menu-item';
export declare class Ng2DropdownState {
    onItemSelected: EventEmitter<Ng2MenuItem>;
    onItemClicked: EventEmitter<Ng2MenuItem>;
    private _selectedItem;
    readonly selectedItem: Ng2MenuItem;
    select(item: Ng2MenuItem, dispatchEvent?: boolean): void;
    unselect(): void;
}
