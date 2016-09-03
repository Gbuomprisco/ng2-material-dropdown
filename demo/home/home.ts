import { Component } from '@angular/core';

import { Ng2Dropdown } from '../../src/components/dropdown/ng2-dropdown';
import { Ng2DropdownButton } from '../../src/components/button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../../src/components/menu/ng2-dropdown-menu';
import { Ng2MenuItem } from '../../src/components/menu-item/ng2-menu-item';
import { DropdownContainer } from './components/dropdown-container';

@Component({
    selector: 'app',
    template: require('./home.html')
})

export class App {
    pages = ['Home', 'Explore', 'Help'];
    constructor() {

    }

    ngOnInit() {

    }
}
