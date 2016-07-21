import {
    Component,
    Output,
    Input,
    EventEmitter,
    ElementRef
} from '@angular/core';

import { Ng2DropdownButtonComponent } from '../../typings/ng2-dropdown-button.d.ts';

@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown-button',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2DropdownButton implements Ng2DropdownButtonComponent {
    @Output() public onMenuToggled: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() public showCaret: boolean = true;

    constructor(private element: ElementRef) {}

    /**
     * @name toggleMenu
     * @desc emits event to toggle menu
     */
    public toggleMenu(): void {
        this.onMenuToggled.emit(true);
    }

    /**
     * @name getPosition
     * @desc returns position of the button
     * @returns {ClientRect}
     */
    public getPosition(): ClientRect {
      const el = this.element.nativeElement;
      return el.getBoundingClientRect();
    }
}
