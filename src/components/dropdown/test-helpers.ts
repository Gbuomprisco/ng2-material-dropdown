import { Component } from '@angular/core';

import { Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2MenuItem } from '../../index';
const directives = [Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2MenuItem];

@Component({
    selector: 'basic-dropdown',
    directives,
    template: `
        <main>
        <ng2-dropdown>
            <ng2-dropdown-button>
                Open
            </ng2-dropdown-button>
            <ng2-dropdown-menu>
                <ng2-menu-item>
                    First item
                </ng2-menu-item>
                <ng2-menu-item [preventClose]="true">
                    Second item
                </ng2-menu-item>
            </ng2-dropdown-menu>
        </ng2-dropdown>
        </main>
    `
})
export class BasicDropdown {
    ngOnInit() {}
}
