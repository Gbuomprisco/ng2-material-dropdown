import {
    Component,
    ContentChild,
    Output,
    EventEmitter
} from '@angular/core';

import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';

import { Ng2DropdownComponent, Ng2DropdownStateProvider } from '../../typings/ng2-dropdown.d.ts';

const styles = [require('./style.scss').toString()],
    template = require('./template.html');

@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown',
    styles,
    template
})
export class Ng2Dropdown implements Ng2DropdownComponent {
    // get children components
    @ContentChild(Ng2DropdownButton) public button: Ng2DropdownButton;
    @ContentChild(Ng2DropdownMenu) public menu: Ng2DropdownMenu;

    // outputs
    @Output() public onItemClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onItemSelected: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onShow: EventEmitter<Ng2DropdownComponent> = new EventEmitter<Ng2DropdownComponent>();
    @Output() public onHide: EventEmitter<Ng2DropdownComponent> = new EventEmitter<Ng2DropdownComponent>();

    /**
     * @name state
     * @type {Ng2DropdownState}
     */
    public state: Ng2DropdownStateProvider = new Ng2DropdownState();

    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    public toggleMenu(position = this.button.getPosition(), focus = true): void {
        this.menu.state.isVisible ? this.hide() : this.show(position, focus);
    }

    private hide(): void {
        this.menu.hide();
        this.onHide.emit(this);
    }

    private show(position = this.button.getPosition(), focus = true): void {
        this.menu.show(focus);

        // update menu position based on its button's
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    }

    ngOnInit() {
        this.state.onItemClicked.subscribe(item => {
            this.onItemClicked.emit(item);

            if (item.preventClose) {
                return;
            }

            this.hide.call(this);
        });

        if (this.button) {
            this.button.onMenuToggled.subscribe(() => {
                this.toggleMenu();
            });
        }

        this.state.onItemSelected.subscribe(item => this.onItemSelected.emit(item));
    }
}
