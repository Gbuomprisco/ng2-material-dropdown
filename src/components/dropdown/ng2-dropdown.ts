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

    public state = {
        isOpen: false
    };

    constructor() {}

    toggleMenu() {
        this.state.isOpen = !this.state.isOpen;
    }

    ngAfterContentInit() {
        this.button.onMenuToggled.subscribe(() => {
            this.toggleMenu();
        });
    }

    ngOnInit() {

    }
}
