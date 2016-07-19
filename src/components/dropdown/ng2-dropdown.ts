import {
    Component,
    ContentChild,
    Output,
    EventEmitter
} from '@angular/core';

import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';

import {
    Ng2DropdownComponent,
    Ng2DropdownStateProvider
} from './ng2-dropdown.d';

const styles = [require('./style.scss').toString()],
    template = require('./template.html');

/**
 * A component for entering a list of terms to be used with ngModel.
 */
@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown',
    providers: [],
    styles,
    template
})
export class Ng2Dropdown implements Ng2DropdownComponent {
    @ContentChild(Ng2DropdownButton) public button: Ng2DropdownButton;
    @ContentChild(Ng2DropdownMenu) public menu: Ng2DropdownMenu;
    @Output() public onItemClicked: EventEmitter<string> = new EventEmitter<string>();

    /**
     * @name state
     * @type {Ng2DropdownState}
     */
    public state: Ng2DropdownStateProvider = new Ng2DropdownState();

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

    ngAfterViewInit() {
        this.state.onItemClicked.subscribe(item => {
            this.onItemClicked.emit(item);

            if (item.preventClose) {
                return;
            }

            this.toggleMenu();
        });

        if (this.button) {
            this.button.onMenuToggled.subscribe(() => {
                this.toggleMenu();
            });
        }
    }
}
