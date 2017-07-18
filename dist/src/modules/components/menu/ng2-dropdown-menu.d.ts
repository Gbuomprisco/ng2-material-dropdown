import { ElementRef, Renderer, QueryList } from '@angular/core';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { DropdownStateService } from '../../services/dropdown-state.service';
export declare class Ng2DropdownMenu {
    state: DropdownStateService;
    private element;
    private renderer;
    width: number;
    focusFirstElement: boolean;
    offset: string;
    appendToBody: boolean;
    items: QueryList<Ng2MenuItem>;
    private position;
    private listeners;
    constructor(state: DropdownStateService, element: ElementRef, renderer: Renderer);
    show(): void;
    hide(): void;
    updatePosition(position: ClientRect): void;
    handleKeypress($event: any): void;
    private getMenuElement();
    private calcPositionOffset(position);
    private applyOffset(top, left);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
}
