import { QueryList } from '@angular/core';
import { Ng2MenuItemComponent } from './ng2-menu-item';

export declare class Ng2DropdownMenuComponent {
    state: {
        isVisible: boolean;
        toString(): string;
    };
    width: number;
    focusFirstElement: boolean;
    offset: string;
    items: QueryList<Ng2MenuItemComponent>;
    show(focus: boolean): void;
    hide(): void;
    updatePosition(position): void;
    handleKeypress($event): void;
}
