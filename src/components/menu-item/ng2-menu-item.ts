import {
    Component,
    Input
} from '@angular/core';

import { Ng2MenuItemComponent } from './ng2-menu-item.d';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';

@Component({
    moduleId: module.id,
    selector: 'ng2-menu-item',
    styles: [ require('./style.scss').toString() ],
    providers: [ ],
    template: require('./template.html')
})
export class Ng2MenuItem implements Ng2MenuItemComponent {
    @Input() public preventClose: boolean = false;

    constructor(private state: Ng2DropdownState) {}

    public get isSelected(): boolean {
        return this === this.state.getSelectedItem();
    }

    /**
     * @name select
     */
    public select(): void {
        this.state.select(this, true);
    }

    public click(): void {
        this.state.onItemClicked.emit(this);
    }
}
