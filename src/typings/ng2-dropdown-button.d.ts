import { EventEmitter } from '@angular/core';

export declare class Ng2DropdownButtonComponent {
    onMenuToggled: EventEmitter<boolean>;
    showCaret: boolean;
    toggleMenu(): void;
    getPosition(): ClientRect;
}
