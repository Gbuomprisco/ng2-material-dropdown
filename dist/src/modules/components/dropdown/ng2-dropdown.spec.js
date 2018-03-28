"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var ng2_dropdown_1 = require("./ng2-dropdown");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_2 = require("@angular/platform-browser");
var test_helpers_1 = require("./test-helpers");
function getComponent(fixture, component) {
    fixture.detectChanges();
    return fixture.debugElement.query(platform_browser_1.By.directive(component)).componentInstance;
}
describe('Ng2Dropdown', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [platform_browser_2.BrowserModule, test_helpers_1.TestModule]
        });
    });
    describe('when the controller is instantiated', function () {
        it('has its properties defined', function () {
            var fixture = testing_1.TestBed.createComponent(test_helpers_1.BasicDropdown);
            var component = getComponent(fixture, ng2_dropdown_1.Ng2Dropdown);
            expect(component.button).toBeDefined();
            expect(component.menu).toBeDefined();
            expect(component.menu.items.length).toEqual(2);
            expect(component.state.menuState.isVisible).toBe(false);
        });
        it('shows/hides dropdown menu', function () {
            var fixture = testing_1.TestBed.createComponent(test_helpers_1.BasicDropdown);
            var component = getComponent(fixture, ng2_dropdown_1.Ng2Dropdown);
            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(true);
            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(false);
        });
    });
    describe('when using keyboard keys', function () {
        var keyUp = new Event('keyup');
        var keyDown = new Event('keydown');
        var enter = new Event('enter');
        var tab = new Event('tab');
        keyUp['keyCode'] = 38;
        keyDown['keyCode'] = 40;
        enter['keyCode'] = 13;
        tab['keyCode'] = 9;
        it('goes through the dropdown items', testing_1.fakeAsync(function () {
            var fixture = testing_1.TestBed.createComponent(test_helpers_1.BasicDropdown);
            var component = getComponent(fixture, ng2_dropdown_1.Ng2Dropdown);
            component.show();
            fixture.detectChanges();
            testing_1.tick();
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);
            component.menu.handleKeypress(keyDown);
            fixture.detectChanges();
            testing_1.tick();
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
            component.menu.handleKeypress(keyUp);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);
            component.menu.handleKeypress(tab);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
        }));
        it('fires click event when pressing enter', testing_1.fakeAsync(function () {
            var fixture = testing_1.TestBed.createComponent(test_helpers_1.BasicDropdown);
            var component = getComponent(fixture, ng2_dropdown_1.Ng2Dropdown);
            component.show();
            component.menu.handleKeypress(keyDown);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
            component.menu.handleKeypress(enter);
            expect(component.state.menuState.isVisible).toEqual(true);
        }));
    });
});
//# sourceMappingURL=ng2-dropdown.spec.js.map