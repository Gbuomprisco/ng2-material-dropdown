import { Ng2Dropdown } from './components/dropdown/ng2-dropdown';
import { Ng2DropdownMenu } from './components/menu/ng2-dropdown-menu';
import { Ng2DropdownButton } from './components/button/ng2-dropdown-button';
import { Ng2MenuItem } from './components/menu-item/ng2-menu-item';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownStateService } from './services/dropdown-state.service';
var Ng2DropdownModule = (function () {
    function Ng2DropdownModule() {
    }
    return Ng2DropdownModule;
}());
export { Ng2DropdownModule };
Ng2DropdownModule.decorators = [
    { type: NgModule, args: [{
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
                    Ng2DropdownMenu,
                ],
                imports: [
                    CommonModule
                ]
            },] },
];
Ng2DropdownModule.ctorParameters = function () { return []; };
export { Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, Ng2DropdownButton, DropdownStateService };
//# sourceMappingURL=ng2-dropdown.module.js.map