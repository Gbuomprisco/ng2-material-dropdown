import {
    Component,
    Input
 } from '@angular/core';

import { dropdownState } from '../dropdown/ng2-dropdown-state';
import { Ng2MenuItemComponent } from './ng2-menu-item.d';

@Component({
    moduleId: module.id,
    selector: 'ng2-menu-item',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2MenuItem implements Ng2MenuItemComponent {
    @Input() public preventClose: boolean = false;

    /**
     * @name isSelected
     * @returns {boolean}
     */
    public get isSelected(): boolean {
        return dropdownState.selectedItem === this;
    }

    /**
     * @name onClick
     */
    public onClick(): void {
       dropdownState.onItemClicked.emit(this);
    }

    /**
     * @name select
     */
    public select(): void {
        if (this.isSelected) {
            return;
        }

        dropdownState.select(this);
    }
}

