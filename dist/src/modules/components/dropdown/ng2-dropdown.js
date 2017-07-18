import { HostListener, Component, ContentChild, Output, EventEmitter, Input } from '@angular/core';
import { Ng2DropdownButton } from '../button/ng2-dropdown-button';
import { Ng2DropdownMenu } from '../menu/ng2-dropdown-menu';
import { DropdownStateService } from '../../services/dropdown-state.service';
var Ng2Dropdown = (function () {
    function Ng2Dropdown(state) {
        this.state = state;
        this.dynamicUpdate = true;
        this.onItemClicked = new EventEmitter();
        this.onItemSelected = new EventEmitter();
        this.onShow = new EventEmitter();
        this.onHide = new EventEmitter();
    }
    Ng2Dropdown.prototype.toggleMenu = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.state.menuState.isVisible ? this.hide() : this.show(position);
    };
    Ng2Dropdown.prototype.hide = function () {
        this.menu.hide();
        this.onHide.emit(this);
    };
    Ng2Dropdown.prototype.show = function (position) {
        if (position === void 0) { position = this.button.getPosition(); }
        this.menu.show();
        this.menu.updatePosition(position);
        this.onShow.emit(this);
    };
    Ng2Dropdown.prototype.scrollListener = function () {
        if (this.state.menuState.isVisible && this.button && this.dynamicUpdate) {
            this.menu.updatePosition(this.button.getPosition());
        }
    };
    Ng2Dropdown.prototype.ngOnInit = function () {
        var _this = this;
        this.state.dropdownState.onItemClicked.subscribe(function (item) {
            _this.onItemClicked.emit(item);
            if (item.preventClose) {
                return;
            }
            _this.hide.call(_this);
        });
        if (this.button) {
            this.button.onMenuToggled.subscribe(function () {
                _this.toggleMenu();
            });
        }
        this.state.dropdownState.onItemSelected.subscribe(function (item) { return _this.onItemSelected.emit(item); });
    };
    return Ng2Dropdown;
}());
export { Ng2Dropdown };
Ng2Dropdown.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown',
                templateUrl: './template.html',
                providers: [DropdownStateService]
            },] },
];
Ng2Dropdown.ctorParameters = function () { return [
    { type: DropdownStateService, },
]; };
Ng2Dropdown.propDecorators = {
    'button': [{ type: ContentChild, args: [Ng2DropdownButton,] },],
    'menu': [{ type: ContentChild, args: [Ng2DropdownMenu,] },],
    'dynamicUpdate': [{ type: Input },],
    'onItemClicked': [{ type: Output },],
    'onItemSelected': [{ type: Output },],
    'onShow': [{ type: Output },],
    'onHide': [{ type: Output },],
    'scrollListener': [{ type: HostListener, args: ['window:scroll',] },],
};
//# sourceMappingURL=ng2-dropdown.js.map