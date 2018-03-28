"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng2_dropdown_module_1 = require("../../ng2-dropdown.module");
var BasicDropdown = (function () {
    function BasicDropdown() {
    }
    BasicDropdown.prototype.ngOnInit = function () { };
    return BasicDropdown;
}());
BasicDropdown = __decorate([
    core_1.Component({
        selector: 'basic-dropdown',
        template: "\n        <main>\n        <ng2-dropdown>\n            <ng2-dropdown-button>\n                Open\n            </ng2-dropdown-button>\n            <ng2-dropdown-menu [focusFirstElement]=\"true\">\n                <ng2-menu-item>\n                    First item\n                </ng2-menu-item>\n                <ng2-menu-item [preventClose]=\"true\">\n                    Second item\n                </ng2-menu-item>\n            </ng2-dropdown-menu>\n        </ng2-dropdown>\n        </main>\n    "
    })
], BasicDropdown);
exports.BasicDropdown = BasicDropdown;
var TestModule = (function () {
    function TestModule() {
    }
    return TestModule;
}());
TestModule = __decorate([
    core_1.NgModule({
        declarations: [
            BasicDropdown
        ],
        imports: [ng2_dropdown_module_1.Ng2DropdownModule],
        exports: [BasicDropdown]
    })
], TestModule);
exports.TestModule = TestModule;
//# sourceMappingURL=test-helpers.js.map