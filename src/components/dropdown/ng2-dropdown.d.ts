import { EventEmitter } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';

interface Ng2DropdownComponent {
    toggleMenu(): void;
}

interface Ng2DropdownStateServiceInterface {
    onItemSelected: EventEmitter<Ng2MenuItem>;
    getSelectedItem(): Ng2MenuItem;
    select(item: Ng2MenuItem, dispatchEvent: boolean): void;
    unselect(): void;
}

export { Ng2DropdownComponent, Ng2DropdownStateServiceInterface }
