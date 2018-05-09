import {
    Component,
    Input,
    Renderer,
    ElementRef,
    OnDestroy
} from '@angular/core';

import { DropdownStateService } from '../../services/dropdown-state.service';

@Component({
    selector: 'ng2-menu-item',
    styleUrls: [ './style.scss' ],
    templateUrl: './template.html'
})
export class Ng2MenuItem implements OnDestroy {
    /**
     * @preventClose
     * @desc if true, clicking on the item won't close the dropdown
     */
    @Input() public preventClose: boolean = false;

    /**
     * @name value
     * @desc any value associated to the item
     */
    @Input() public value: any;

    constructor(private state: DropdownStateService,
                private element: ElementRef,
                private renderer: Renderer) {}

    public ngOnDestroy(): void {
        this.state.dropdownState.onItemDestroyed.emit(this);
    }

    /**
     * @name isSelected
     * @desc returns current selected item
     */
    public get isSelected(): boolean {
        return this === this.state.dropdownState.selectedItem;
    }

    /**
     * @name click
     * @desc emits select event
     */
    public select($event?): void {
        this.state.dropdownState.select(this, true);

        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    }

    /**
     * @name click
     * @desc emits click event
     */
    public click(): void {
        this.state.dropdownState.onItemClicked.emit(this);
    }

    /**
     * @name focus
     */
    public focus() {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    }
}
