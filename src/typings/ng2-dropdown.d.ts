import { EventEmitter } from '@angular/core';
import { Ng2DropdownButtonComponent } from './ng2-dropdown-button.d.ts';

export declare class Ng2DropdownComponent {
    state: Ng2DropdownStateProvider;
    button: Ng2DropdownButtonComponent;
    menu: Ng2DropdownMenuComponent;

    // outputs
    onItemClicked: EventEmitter<string>;
    onItemSelected: EventEmitter<string>;
    onShow: EventEmitter<Ng2DropdownComponent>;
    onHide: EventEmitter<Ng2DropdownComponent>;
    toggleMenu(position: ClientRect): void;
}

export declare class Ng2DropdownStateProvider {
    onItemSelected: EventEmitter<Ng2MenuItemComponent>;
    onItemClicked: EventEmitter<Ng2MenuItemComponent>;
    selectedItem: Ng2MenuItemComponent;
    select(item: Ng2MenuItemComponent, dispatchEvent: boolean): void;
    unselect(): void;
}
