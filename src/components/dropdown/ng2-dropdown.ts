import {
    Component,
    OnInit,
    ContentChild
} from '@angular/core';

import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';

const styles = [require('./style.scss').toString()],
    template = require('./template.html');

import { Ng2DropdownComponent } from '../dropdown/ng2-dropdown.d';

/**
 * A component for entering a list of terms to be used with ngModel.
 */
@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown',
    directives: [ ],
    styles,
    template
})
export class Ng2Dropdown implements OnInit, Ng2DropdownComponent {
    @ContentChild(Ng2DropdownButton) public button: Ng2DropdownButton;
    @ContentChild(Ng2DropdownMenu) public menu: Ng2DropdownMenu;

    constructor() {}

    toggleMenu() {
        this.menu.getState().isVisible ? this.menu.hide() : this.menu.show();

        const position = this.button.getPosition();
        this.menu.updatePosition(position);
    }

    ngAfterContentInit() {
        this.button.onMenuToggled.subscribe(() => {
            this.toggleMenu();
        });
    }

    ngOnInit() {

    }
}
