import {
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

import { Ng2Dropdown } from './ng2-dropdown';

import { By } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';

// Load the implementations that should be tested
import { TestModule, BasicDropdown } from './test-helpers';

function getComponent(fixture, component) {
    fixture.detectChanges();
    return fixture.debugElement.query(By.directive(component)).componentInstance;
}

describe('Ng2Dropdown', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserModule, TestModule]
        });
    });

    describe('when the controller is instantiated', () => {
        it('has its properties defined', () => {
            const fixture: ComponentFixture<BasicDropdown> = TestBed.createComponent(BasicDropdown);
            const component = getComponent(fixture, Ng2Dropdown);
            expect(component.button).toBeDefined();
            expect(component.menu).toBeDefined();
            expect(component.menu.items.length).toEqual(2);
            expect(component.state.menuState.isVisible).toBe(false);
        });

        it('shows/hides dropdown menu', () => {
            const fixture: ComponentFixture<BasicDropdown> = TestBed.createComponent(BasicDropdown);
            const component = getComponent(fixture, Ng2Dropdown);

            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(true);

            component.button.toggleMenu();
            expect(component.state.menuState.isVisible).toEqual(false);
        });
    });

    describe('when using keyboard keys', () => {
        let keyUp: Event = new Event('keyup');
        let keyDown: Event = new Event('keydown');
        let enter: Event = new Event('enter');
        let tab: Event = new Event('tab');

        keyUp['keyCode'] = 38;
        keyDown['keyCode'] = 40;
        enter['keyCode'] = 13;
        tab['keyCode'] = 9;

        it('goes through the dropdown items', () => {
            const fixture: ComponentFixture<BasicDropdown> = TestBed.createComponent(BasicDropdown);
            const component = getComponent(fixture, Ng2Dropdown);
            component.menu.show();

            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);

            component.menu.handleKeypress(keyDown);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);

            component.menu.handleKeypress(keyUp);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);

            component.menu.handleKeypress(tab);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
        });

        it('fires click event when pressing enter', () => {
            const fixture: ComponentFixture<BasicDropdown> = TestBed.createComponent(BasicDropdown);
            const component = getComponent(fixture, Ng2Dropdown);

            component.menu.show();

            // press enter
            component.menu.handleKeypress(enter);

            // menu not visible
            expect(component.state.menuState.isVisible).toEqual(false);

            // show menu and press element with preventClose attribute set to true
            component.menu.show();
            component.menu.handleKeypress(keyDown);
            expect(component.state.dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);

            // press enter
            component.menu.handleKeypress(enter);

            // menu is visible
            expect(component.state.menuState.isVisible).toEqual(true);
        });
    });
});
