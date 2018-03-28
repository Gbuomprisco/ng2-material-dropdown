import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
var Ng2DropdownButton = (function () {
    function Ng2DropdownButton(element) {
        this.element = element;
        this.onMenuToggled = new EventEmitter();
        this.showCaret = true;
    }
    Ng2DropdownButton.prototype.toggleMenu = function () {
        this.onMenuToggled.emit(true);
    };
    Ng2DropdownButton.prototype.getPosition = function () {
        return this.element.nativeElement.getBoundingClientRect();
    };
    return Ng2DropdownButton;
}());
export { Ng2DropdownButton };
Ng2DropdownButton.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown-button',
                styleUrls: ['./style.scss'],
                templateUrl: './template.html'
            },] },
];
Ng2DropdownButton.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
Ng2DropdownButton.propDecorators = {
    'onMenuToggled': [{ type: Output },],
    'showCaret': [{ type: Input },],
};
//# sourceMappingURL=ng2-dropdown-button.js.map