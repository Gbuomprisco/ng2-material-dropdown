import {
    Component
} from '@angular/core';

import { Ng2Dropdown } from '../../../src/components/dropdown/ng2-dropdown';
import { Ng2DropdownMenu } from '../../../src/components/menu/ng2-dropdown-menu';
import { Ng2DropdownButton } from '../../../src/components/button/ng2-dropdown-button';
import { Ng2MenuItem } from '../../../src/components/menu-item/ng2-menu-item';

@Component({
    selector: 'dropdown-container',
    providers: [ ],
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
