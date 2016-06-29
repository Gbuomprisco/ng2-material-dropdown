import { Component } from '@angular/core';
import { Ng2Dropdown } from '../../src/components/dropdown/ng2-dropdown';
import { Ng2DropdownButton } from '../../src/components/button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../../src/components/menu/ng2-dropdown-menu';


@Component({
    selector: 'app',
    directives: [ Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu ],
    template: require('./home.html')
})

export class App {
    constructor() {

    }

    ngOnInit() {

    }
}
