import { EventEmitter, ElementRef } from '@angular/core';
export declare class Ng2DropdownButton {
    private element;
    onMenuToggled: EventEmitter<boolean>;
    showCaret: boolean;
    constructor(element: ElementRef);
    toggleMenu(): void;
    getPosition(): ClientRect;
}
