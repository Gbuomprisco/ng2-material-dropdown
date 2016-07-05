import {
    describe,
    inject,
    it,
    expect,
    tick,
    beforeEach,
    fakeAsync
} from '@angular/core/testing';

import {
    ComponentFixture,
    TestComponentBuilder
} from '@angular/compiler/testing';

import { By } from '@angular/platform-browser';

// Load the implementations that should be tested
import { Ng2Dropdown } from '../../index';
import { dropdownState } from './ng2-dropdown-state';
import { BasicDropdown } from './test-helpers';

function getComponent(fixture, component) {
    fixture.detectChanges();
    return fixture.debugElement.query(By.directive(component)).componentInstance;
}

describe('Ng2Dropdown', () => {
    let builder: TestComponentBuilder;

    beforeEach(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => builder = tcb));

    describe('when the controller is instantiated', () => {
        it('has its properties defined', () => {
            builder.createAsync(BasicDropdown).then((fixture: ComponentFixture<BasicDropdown>) => {
                const component = getComponent(fixture, Ng2Dropdown);
                expect(component.button).toBeDefined();
                expect(component.menu).toBeDefined();
                expect(component.menu.items.length).toEqual(2);
                expect(component.menu.state.isVisible).toBe(false);
            });
        });

        it('shows/hides dropdown menu', () => {
            builder.createAsync(BasicDropdown).then((fixture: ComponentFixture<BasicDropdown>) => {
                const component = getComponent(fixture, Ng2Dropdown);

                component.button.toggleMenu();
                expect(component.menu.state.isVisible).toEqual(true);

                component.button.toggleMenu();
                expect(component.menu.state.isVisible).toEqual(false);
            });
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
            builder.createAsync(BasicDropdown).then((fixture: ComponentFixture<BasicDropdown>) => {
                const component = getComponent(fixture, Ng2Dropdown);
                component.menu.show();

                expect(dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);

                component.menu.handleKeypress(keyDown);
                expect(dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);

                component.menu.handleKeypress(keyUp);
                expect(dropdownState.selectedItem).toBe(component.menu.items.toArray()[0]);

                component.menu.handleKeypress(tab);
                expect(dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);
            });
        });

        it('fires click event when pressing enter', () => {
            builder.createAsync(BasicDropdown).then((fixture: ComponentFixture<BasicDropdown>) => {
                const component = getComponent(fixture, Ng2Dropdown);

                component.menu.show();

                // press enter
                component.menu.handleKeypress(enter);

                // menu not visible
                expect(component.menu.state.isVisible).toEqual(false);

                // show menu and press element with preventClose attribute set to true
                component.menu.show();
                component.menu.handleKeypress(keyDown);
                expect(dropdownState.selectedItem).toBe(component.menu.items.toArray()[1]);

                // press enter
                component.menu.handleKeypress(enter);

                // menu is visible
                expect(component.menu.state.isVisible).toEqual(true);
            });
        });
    });
});
