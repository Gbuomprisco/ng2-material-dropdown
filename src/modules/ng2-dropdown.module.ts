import { Ng2Dropdown } from './components/dropdown/ng2-dropdown';
import { Ng2DropdownMenu } from './components/menu/ng2-dropdown-menu';
import { Ng2DropdownButton } from './components/button/ng2-dropdown-button';
import { Ng2MenuItem } from './components/menu-item/ng2-menu-item';

import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        Ng2MenuItem,
        Ng2DropdownButton,
        Ng2DropdownMenu,
        Ng2Dropdown
    ],
    declarations: [
        Ng2Dropdown,
        Ng2MenuItem,
        Ng2DropdownButton,
        Ng2DropdownMenu
    ],
    imports: []
})
export class Ng2DropdownModule {}

export {
    Ng2Dropdown,
    Ng2DropdownMenu,
    Ng2MenuItem,
    Ng2DropdownButton
}
