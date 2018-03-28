import { EventEmitter } from '@angular/core';
var Ng2DropdownState = (function () {
    function Ng2DropdownState() {
        this.onItemSelected = new EventEmitter();
        this.onItemClicked = new EventEmitter();
    }
    Object.defineProperty(Ng2DropdownState.prototype, "selectedItem", {
        get: function () {
            return this._selectedItem;
        },
        enumerable: true,
        configurable: true
    });
    Ng2DropdownState.prototype.select = function (item, dispatchEvent) {
        if (dispatchEvent === void 0) { dispatchEvent = true; }
        this._selectedItem = item;
        if (!dispatchEvent) {
            return;
        }
        item.focus();
        this.onItemSelected.emit(item);
    };
    Ng2DropdownState.prototype.unselect = function () {
        this._selectedItem = undefined;
    };
    return Ng2DropdownState;
}());
export { Ng2DropdownState };
//# sourceMappingURL=ng2-dropdown-state.js.map