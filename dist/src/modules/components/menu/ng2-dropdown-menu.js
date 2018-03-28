import { Component, ElementRef, Renderer, ContentChildren, Input, trigger, style, transition, animate, keyframes, state } from '@angular/core';
import { ACTIONS, arrowKeysHandler } from './actions';
import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { DropdownStateService } from '../../services/dropdown-state.service';
var Ng2DropdownMenu = (function () {
    function Ng2DropdownMenu(state, element, renderer) {
        this.state = state;
        this.element = element;
        this.renderer = renderer;
        this.width = 4;
        this.focusFirstElement = true;
        this.appendToBody = true;
        this.listeners = {
            arrowHandler: undefined,
            handleKeypress: undefined
        };
    }
    Ng2DropdownMenu.prototype.show = function () {
        this.state.menuState.isVisible = true;
        this.listeners.handleKeypress = this.renderer.listen(document.body, 'keydown', this.handleKeypress.bind(this));
        this.listeners.arrowHandler = this.renderer.listen(window, 'keydown', arrowKeysHandler);
    };
    Ng2DropdownMenu.prototype.hide = function () {
        this.state.menuState.isVisible = false;
        this.state.dropdownState.unselect();
        this.listeners.arrowHandler();
        this.listeners.handleKeypress();
    };
    Ng2DropdownMenu.prototype.updatePosition = function (position) {
        this.position = position;
        this.ngDoCheck();
    };
    Ng2DropdownMenu.prototype.handleKeypress = function ($event) {
        var key = $event.keyCode;
        var items = this.items.toArray();
        var index = items.indexOf(this.state.dropdownState.selectedItem);
        if (!ACTIONS.hasOwnProperty(key)) {
            return;
        }
        ACTIONS[key].call(this, index, items, this.state.dropdownState);
    };
    Ng2DropdownMenu.prototype.getMenuElement = function () {
        return this.element.nativeElement.children[0];
    };
    Ng2DropdownMenu.prototype.calcPositionOffset = function (position) {
        if (!position) {
            return;
        }
        var element = this.getMenuElement();
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ?
            document.documentElement.scrollLeft : document.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ?
            document.documentElement.scrollTop : document.body.scrollTop;
        var _a = this.applyOffset(position.top + (this.appendToBody ? y - 15 : 0) + "px", position.left + x - 5 + "px"), top = _a.top, left = _a.left;
        var clientWidth = element.clientWidth;
        var clientHeight = element.clientHeight;
        var marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
        var marginFromRight = parseInt(left) + clientWidth;
        var windowScrollHeight = window.innerHeight + window.scrollY;
        var windowScrollWidth = window.innerWidth + window.scrollX;
        if (marginFromBottom >= windowScrollHeight) {
            top = parseInt(top.replace('px', '')) - clientHeight + "px";
        }
        if (marginFromRight >= windowScrollWidth) {
            var marginRight = marginFromRight - windowScrollWidth + 30;
            left = parseInt(left.replace('px', '')) - marginRight + "px";
        }
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.applyOffset = function (top, left) {
        if (!this.offset) {
            return { top: top, left: left };
        }
        var offset = this.offset.split(' ');
        if (!offset[1]) {
            offset[1] = '0';
        }
        top = parseInt(top.replace('px', '')) + parseInt(offset[0]) + "px";
        left = parseInt(left.replace('px', '')) + parseInt(offset[1]) + "px";
        return { top: top, left: left };
    };
    Ng2DropdownMenu.prototype.ngOnInit = function () {
        if (this.appendToBody) {
            document.body.appendChild(this.element.nativeElement);
        }
    };
    Ng2DropdownMenu.prototype.ngDoCheck = function () {
        if (this.state.menuState.isVisible && this.position) {
            var element = this.getMenuElement();
            var position = this.calcPositionOffset(this.position);
            if (position) {
                this.renderer.setElementStyle(element, 'top', position.top);
                this.renderer.setElementStyle(element, 'left', position.left);
            }
            if (this.focusFirstElement &&
                this.items.first &&
                !this.state.dropdownState.selectedItem) {
                this.state.dropdownState.select(this.items.first, false);
            }
        }
    };
    Ng2DropdownMenu.prototype.ngOnDestroy = function () {
        var elem = this.element.nativeElement;
        elem.parentNode.removeChild(elem);
        if (this.listeners.handleKeypress) {
            this.listeners.handleKeypress();
        }
    };
    return Ng2DropdownMenu;
}());
export { Ng2DropdownMenu };
Ng2DropdownMenu.decorators = [
    { type: Component, args: [{
                selector: 'ng2-dropdown-menu',
                styleUrls: ['./style.scss'],
                templateUrl: './template.html',
                animations: [
                    trigger('fade', [
                        state('visible', style({ display: 'block', overflow: '*' })),
                        state('hidden', style({ display: 'none', overflow: 'hidden', width: '0' })),
                        transition('hidden => visible', [
                            animate(150, keyframes([
                                style({ opacity: 0, offset: 0, height: '0', width: '0' }),
                                style({ opacity: 1, offset: 1, height: '*', width: '*' }),
                            ]))
                        ]),
                        transition('visible => hidden', [
                            animate(250, keyframes([
                                style({ opacity: 1, offset: 0, height: '*', width: '*' }),
                                style({ opacity: 0, offset: 1, height: '0', width: '0' }),
                            ]))
                        ])
                    ]),
                    trigger('opacity', [
                        transition('hidden => visible', [
                            animate(450, keyframes([
                                style({ opacity: 0, offset: 0 }),
                                style({ opacity: 1, offset: 1 }),
                            ]))
                        ]),
                        transition('visible => hidden', [
                            animate(200, keyframes([
                                style({ opacity: 1, offset: 0 }),
                                style({ opacity: 0.5, offset: 0.3 }),
                                style({ opacity: 0, offset: 1 }),
                            ]))
                        ])
                    ])
                ]
            },] },
];
Ng2DropdownMenu.ctorParameters = function () { return [
    { type: DropdownStateService, },
    { type: ElementRef, },
    { type: Renderer, },
]; };
Ng2DropdownMenu.propDecorators = {
    'width': [{ type: Input },],
    'focusFirstElement': [{ type: Input },],
    'offset': [{ type: Input },],
    'appendToBody': [{ type: Input },],
    'items': [{ type: ContentChildren, args: [Ng2MenuItem, { descendants: true },] },],
};
//# sourceMappingURL=ng2-dropdown-menu.js.map