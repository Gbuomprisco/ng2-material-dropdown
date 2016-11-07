import {
    HostListener,
    Component,
    ContentChild,
    Output,
    EventEmitter
} from '@angular/core';

import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';

@Component({
    selector: 'ng2-dropdown',
    styles: [require('./style.scss').toString()],
    template: require('./template.html')
})
export class Ng2Dropdown {
    // get children components
    @ContentChild(Ng2DropdownButton) public button: Ng2DropdownButton;
    @ContentChild(Ng2DropdownMenu) public menu: Ng2DropdownMenu;

    // outputs
    @Output() public onItemClicked: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onItemSelected: EventEmitter<string> = new EventEmitter<string>();
    @Output() public onShow: EventEmitter<Ng2Dropdown> = new EventEmitter<Ng2Dropdown>();
    @Output() public onHide: EventEmitter<Ng2Dropdown> = new EventEmitter<Ng2Dropdown>();

    /**
     * @name state
     * @type {Ng2DropdownState}
     */
    public state: Ng2DropdownState = new Ng2DropdownState();

    /**
     * @name toggleMenu
     * @desc toggles menu visibility
     */
    public toggleMenu(position = this.button.getPosition()): void {
        this.menu.state.isVisible ? this.hide() : this.show(position);
    }

    private hide(): void {
        this.menu.hide();
        this.onHide.emit(this);
    }

    private show(position = this.button.getPosition()): void {
        this.menu.show();

        // update menu position based on its button's
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    }

    @HostListener('window:scroll')
    private scrollListener() {
        if (this.menu.state.isVisible) {
            this.menu.updatePosition(this.button.getPosition());
        }
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
