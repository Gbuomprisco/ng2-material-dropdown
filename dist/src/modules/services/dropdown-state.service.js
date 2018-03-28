import { Injectable } from '@angular/core';
import { Ng2DropdownState } from './ng2-dropdown-state';
var DropdownStateService = (function () {
    function DropdownStateService() {
        this.menuState = {
            isVisible: false,
            toString: function () {
                return this.isVisible === true ? 'visible' : 'hidden';
            }
        };
        this.dropdownState = new Ng2DropdownState();
    }
    return DropdownStateService;
}());
export { DropdownStateService };
DropdownStateService.decorators = [
    { type: Injectable },
];
DropdownStateService.ctorParameters = function () { return []; };
//# sourceMappingURL=dropdown-state.service.js.map