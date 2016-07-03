import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';

interface Ng2DropdownComponent {
    toggleMenu(): void;
}

interface Ng2DropdownStateServiceInterface {
    onItemClicked: EventEmitter<Ng2MenuItem>;
    onItemSelected: EventEmitter<Ng2MenuItem>;
    selectedItem: Ng2MenuItem;

    select(item: Ng2MenuItem): void;
    unselect(): void;
}

export { Ng2DropdownComponent, Ng2DropdownStateServiceInterface }
