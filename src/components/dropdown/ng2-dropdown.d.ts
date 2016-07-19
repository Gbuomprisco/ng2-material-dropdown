import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';

export interface Ng2DropdownComponent {
    state: Ng2DropdownStateProvider;
    toggleMenu(): void;
}

export interface Ng2DropdownStateProvider {
    onItemSelected: EventEmitter<Ng2MenuItem>;
    onItemClicked: EventEmitter<Ng2MenuItem>;
    selectedItem: Ng2MenuItem;
    select(item: Ng2MenuItem, dispatchEvent: boolean): void;
    unselect(): void;
}
