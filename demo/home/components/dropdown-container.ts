import {
    Component
} from '@angular/core';

import { Ng2Dropdown } from '../../../src/components/dropdown/ng2-dropdown';
import { Ng2DropdownMenu } from '../../../src/components/menu/ng2-dropdown-menu';
import { Ng2DropdownButton } from '../../../src/components/button/ng2-dropdown-button';
import { Ng2MenuItem } from '../../../src/components/menu-item/ng2-menu-item';

@Component({
    moduleId: module.id,
    selector: 'dropdown-container',
    providers: [ ],
    directives: [ Ng2Dropdown, Ng2DropdownMenu, Ng2DropdownButton, Ng2MenuItem ],
    template: `<ng2-dropdown>
                    <ng2-dropdown-button>Open</ng2-dropdown-button>
                    <ng2-dropdown-menu>
                        <ng2-menu-item *ngFor="let option of options" [value]="option">
                            {{ option.value }}
                        </ng2-menu-item>
                    </ng2-dropdown-menu>
               </ng2-dropdown>`
})
export class DropdownContainer {
    options = [{value: 'me'}];
}
