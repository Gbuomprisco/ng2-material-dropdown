import { Component, Input, Renderer, ElementRef } from '@angular/core';
import { DropdownStateService } from '../../services/dropdown-state.service';
var Ng2MenuItem = (function () {
    function Ng2MenuItem(state, element, renderer) {
        this.state = state;
        this.element = element;
        this.renderer = renderer;
        this.preventClose = false;
    }
    Object.defineProperty(Ng2MenuItem.prototype, "isSelected", {
        get: function () {
            return this === this.state.dropdownState.selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Ng2MenuItem.prototype.select = function ($event) {
        this.state.dropdownState.select(this, true);
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
    };
    Ng2MenuItem.prototype.click = function () {
        this.state.dropdownState.onItemClicked.emit(this);
    };
    Ng2MenuItem.prototype.focus = function () {
        this.renderer.invokeElementMethod(this.element.nativeElement.children[0], 'focus');
    };
    return Ng2MenuItem;
}());
export { Ng2MenuItem };
Ng2MenuItem.decorators = [
    { type: Component, args: [{
                selector: 'ng2-menu-item',
                styleUrls: ['./style.scss'],
                templateUrl: './template.html'
            },] },
];
Ng2MenuItem.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
Ng2MenuItem.propDecorators = {
    'preventClose': [{ type: Input },],
    'value': [{ type: Input },],
};
//# sourceMappingURL=ng2-menu-item.js.map