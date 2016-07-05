import {
    Component,
    ContentChild,
    Output,
    EventEmitter
} from '@angular/core';

import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { Ng2DropdownComponent } from './ng2-dropdown.d';
import { dropdownState } from './ng2-dropdown-state';

const styles = [require('./style.scss').toString()],
    template = require('./template.html');

/**
 * A component for entering a list of terms to be used with ngModel.
 */
@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown',
    styles,
    template
})
export class Ng2Dropdown implements Ng2DropdownComponent {
    @ContentChild(Ng2DropdownButton) public button: Ng2DropdownButton;
    @ContentChild(Ng2DropdownMenu) public menu: Ng2DropdownMenu;

    @Output() public onItemClicked: EventEmitter<any> = new EventEmitter<any>();

    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    public toggleMenu(): void {
        this.menu.state.isVisible ? this.menu.hide() : this.menu.show();

        // get button's position
        const position = this.button.getPosition();

        // update menu position based on its button's
        this.menu.updatePosition(position);
    }

    ngOnInit() {
        dropdownState.onItemClicked.subscribe(item => this.onItemClicked.emit(item));
    }

    ngAfterContentInit() {
        this.button.onMenuToggled.subscribe(() => {
            this.toggleMenu();
        });
    }
}
