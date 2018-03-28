import { Renderer, ElementRef } from '@angular/core';
import { DropdownStateService } from '../../services/dropdown-state.service';
export declare class Ng2MenuItem {
    private state;
    private element;
    private renderer;
    preventClose: boolean;
    value: any;
    constructor(state: DropdownStateService, element: ElementRef, renderer: Renderer);
    readonly isSelected: boolean;
    select($event?: any): void;
    click(): void;
    focus(): void;
}
