(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-dropdown"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-dropdown"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_16__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var ng2_dropdown_1 = __webpack_require__(1);
	exports.Ng2Dropdown = ng2_dropdown_1.Ng2Dropdown;
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	exports.Ng2DropdownMenu = ng2_dropdown_menu_1.Ng2DropdownMenu;
	var ng2_dropdown_button_1 = __webpack_require__(3);
	exports.Ng2DropdownButton = ng2_dropdown_button_1.Ng2DropdownButton;
	var ng2_menu_item_1 = __webpack_require__(8);
	exports.Ng2MenuItem = ng2_menu_item_1.Ng2MenuItem;
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(16);
	var dropdown_state_service_1 = __webpack_require__(9);
	exports.DropdownStateService = dropdown_state_service_1.DropdownStateService;
	var Ng2DropdownModule = (function () {
	    function Ng2DropdownModule() {
	    }
	    return Ng2DropdownModule;
	}());
	Ng2DropdownModule = __decorate([
	    core_1.NgModule({
	        exports: [
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	            ng2_dropdown_1.Ng2Dropdown
	        ],
	        declarations: [
	            ng2_dropdown_1.Ng2Dropdown,
	            ng2_menu_item_1.Ng2MenuItem,
	            ng2_dropdown_button_1.Ng2DropdownButton,
	            ng2_dropdown_menu_1.Ng2DropdownMenu,
	        ],
	        imports: [
	            common_1.CommonModule
	        ]
	    })
	], Ng2DropdownModule);
	exports.Ng2DropdownModule = Ng2DropdownModule;
	

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_button_1 = __webpack_require__(3);
	var ng2_dropdown_menu_1 = __webpack_require__(6);
	var dropdown_state_service_1 = __webpack_require__(9);
	var Ng2Dropdown = (function () {
	    function Ng2Dropdown(state) {
	        this.state = state;
	        this.dynamicUpdate = true;
	        this.onItemClicked = new core_1.EventEmitter();
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onShow = new core_1.EventEmitter();
	        this.onHide = new core_1.EventEmitter();
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
	__decorate([
	    core_1.ContentChild(ng2_dropdown_button_1.Ng2DropdownButton),
	    __metadata("design:type", ng2_dropdown_button_1.Ng2DropdownButton)
	], Ng2Dropdown.prototype, "button", void 0);
	__decorate([
	    core_1.ContentChild(ng2_dropdown_menu_1.Ng2DropdownMenu),
	    __metadata("design:type", ng2_dropdown_menu_1.Ng2DropdownMenu)
	], Ng2Dropdown.prototype, "menu", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2Dropdown.prototype, "dynamicUpdate", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemClicked", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onItemSelected", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onShow", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2Dropdown.prototype, "onHide", void 0);
	__decorate([
	    core_1.HostListener('window:scroll'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", void 0)
	], Ng2Dropdown.prototype, "scrollListener", null);
	Ng2Dropdown = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown',
	        template: __webpack_require__(15),
	        providers: [dropdown_state_service_1.DropdownStateService]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService])
	], Ng2Dropdown);
	exports.Ng2Dropdown = Ng2Dropdown;
	

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var Ng2DropdownButton = (function () {
	    function Ng2DropdownButton(element) {
	        this.element = element;
	        this.onMenuToggled = new core_1.EventEmitter();
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
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], Ng2DropdownButton.prototype, "onMenuToggled", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownButton.prototype, "showCaret", void 0);
	Ng2DropdownButton = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-button',
	        styles: [__webpack_require__(4)],
	        template: __webpack_require__(5)
	    }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], Ng2DropdownButton);
	exports.Ng2DropdownButton = Ng2DropdownButton;
	

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = ".ng2-dropdown-button {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  padding: 0.45rem 0.25rem;\n  font-size: 14px;\n  letter-spacing: 0.08rem;\n  color: #444;\n  outline: 0;\n  cursor: pointer;\n  font-weight: 400;\n  border: none;\n  border-bottom: 1px solid #efefef;\n  text-align: left;\n  min-width: 100px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  max-width: 150px; }\n\n.ng2-dropdown-button:hover {\n  color: #222; }\n\n.ng2-dropdown-button:active, .ng2-dropdown-button:focus {\n  color: #222;\n  border-bottom: 2px solid #2196F3; }\n\n.ng2-dropdown-button__label {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 95%;\n          flex: 1 1 95%; }\n\n.ng2-dropdown-button__caret {\n  width: 12px;\n  height: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 6%;\n          flex: 1 1 6%; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button {\n  border: none;\n  min-width: 40px;\n  width: 40px;\n  border-radius: 100%;\n  transition: all 0.2s;\n  text-align: center;\n  height: 40px;\n  padding: 0.5em; }\n\n:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active {\n  background: rgba(0, 0, 0, 0.2); }\n"

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = "<button class='ng2-dropdown-button' type=\"button\" (click)=\"toggleMenu()\" tabindex=\"0s\">\n    <span class=\"ng2-dropdown-button__label\">\n        <ng-content></ng-content>\n    </span>\n\n    <span class=\"ng2-dropdown-button__caret\" *ngIf=\"showCaret\">\n        <svg enable-background=\"new 0 0 32 32\" height=\"16px\" id=\"Слой_1\" version=\"1.1\" viewBox=\"0 0 32 32\" width=\"16px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><path d=\"M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z\" fill=\"#121313\" id=\"Expand_More\"/><g/><g/><g/><g/><g/><g/></svg>\n    </span>\n</button>\n";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var actions_1 = __webpack_require__(7);
	var ng2_menu_item_1 = __webpack_require__(8);
	var dropdown_state_service_1 = __webpack_require__(9);
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
	        this.listeners.arrowHandler = this.renderer.listen(window, 'keydown', actions_1.arrowKeysHandler);
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
	        if (!actions_1.ACTIONS.hasOwnProperty(key)) {
	            return;
	        }
	        actions_1.ACTIONS[key].call(this, index, items, this.state.dropdownState);
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
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Number)
	], Ng2DropdownMenu.prototype, "width", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "focusFirstElement", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", String)
	], Ng2DropdownMenu.prototype, "offset", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2DropdownMenu.prototype, "appendToBody", void 0);
	__decorate([
	    core_1.ContentChildren(ng2_menu_item_1.Ng2MenuItem, { descendants: true }),
	    __metadata("design:type", core_1.QueryList)
	], Ng2DropdownMenu.prototype, "items", void 0);
	Ng2DropdownMenu = __decorate([
	    core_1.Component({
	        selector: 'ng2-dropdown-menu',
	        styles: [__webpack_require__(13)],
	        template: __webpack_require__(14),
	        animations: [
	            core_1.trigger('fade', [
	                core_1.state('visible', core_1.style({ display: 'block', overflow: '*' })),
	                core_1.state('hidden', core_1.style({ display: 'none', overflow: 'hidden', width: '0' })),
	                core_1.transition('hidden => visible', [
	                    core_1.animate(150, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0, height: '0', width: '0' }),
	                        core_1.style({ opacity: 1, offset: 1, height: '*', width: '*' }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(250, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0, height: '*', width: '*' }),
	                        core_1.style({ opacity: 0, offset: 1, height: '0', width: '0' }),
	                    ]))
	                ])
	            ]),
	            core_1.trigger('opacity', [
	                core_1.transition('hidden => visible', [
	                    core_1.animate(450, core_1.keyframes([
	                        core_1.style({ opacity: 0, offset: 0 }),
	                        core_1.style({ opacity: 1, offset: 1 }),
	                    ]))
	                ]),
	                core_1.transition('visible => hidden', [
	                    core_1.animate(200, core_1.keyframes([
	                        core_1.style({ opacity: 1, offset: 0 }),
	                        core_1.style({ opacity: 0.5, offset: 0.3 }),
	                        core_1.style({ opacity: 0, offset: 1 }),
	                    ]))
	                ])
	            ])
	        ]
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2DropdownMenu);
	exports.Ng2DropdownMenu = Ng2DropdownMenu;
	

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var KEYS = {
	    BACKSPACE: 9,
	    PREV: 38,
	    NEXT: 40,
	    ENTER: 13
	};
	var onSwitchNext = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	};
	var onSwitchPrev = function (index, items, state) {
	    if (index > 0) {
	        state.select(items[index - 1], true);
	    }
	};
	var onBackspace = function (index, items, state) {
	    if (index < items.length - 1) {
	        state.select(items[index + 1], true);
	    }
	    else {
	        state.select(items[0], true);
	    }
	};
	var onItemClicked = function (index, items, state) {
	    return state.selectedItem ? state.selectedItem.click() : undefined;
	};
	exports.ACTIONS = (_a = {},
	    _a[KEYS.BACKSPACE] = onBackspace,
	    _a[KEYS.PREV] = onSwitchPrev,
	    _a[KEYS.NEXT] = onSwitchNext,
	    _a[KEYS.ENTER] = onItemClicked,
	    _a);
	function arrowKeysHandler(event) {
	    if ([38, 40].indexOf(event.keyCode) > -1) {
	        event.preventDefault();
	    }
	}
	exports.arrowKeysHandler = arrowKeysHandler;
	var _a;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var dropdown_state_service_1 = __webpack_require__(9);
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
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Boolean)
	], Ng2MenuItem.prototype, "preventClose", void 0);
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", Object)
	], Ng2MenuItem.prototype, "value", void 0);
	Ng2MenuItem = __decorate([
	    core_1.Component({
	        selector: 'ng2-menu-item',
	        styles: [__webpack_require__(11)],
	        template: __webpack_require__(12)
	    }),
	    __metadata("design:paramtypes", [dropdown_state_service_1.DropdownStateService,
	        core_1.ElementRef,
	        core_1.Renderer])
	], Ng2MenuItem);
	exports.Ng2MenuItem = Ng2MenuItem;
	

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var ng2_dropdown_state_1 = __webpack_require__(10);
	var DropdownStateService = (function () {
	    function DropdownStateService() {
	        this.menuState = {
	            isVisible: false,
	            toString: function () {
	                return this.isVisible === true ? 'visible' : 'hidden';
	            }
	        };
	        this.dropdownState = new ng2_dropdown_state_1.Ng2DropdownState();
	    }
	    return DropdownStateService;
	}());
	DropdownStateService = __decorate([
	    core_1.Injectable()
	], DropdownStateService);
	exports.DropdownStateService = DropdownStateService;
	

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var core_1 = __webpack_require__(2);
	var Ng2DropdownState = (function () {
	    function Ng2DropdownState() {
	        this.onItemSelected = new core_1.EventEmitter();
	        this.onItemClicked = new core_1.EventEmitter();
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
	exports.Ng2DropdownState = Ng2DropdownState;
	

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = ".ng2-menu-item {\n  font-family: \"Roboto\", \"Helvetica Neue\", Helvetica, Arial;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  font-size: 0.9em;\n  text-transform: none;\n  font-weight: 400;\n  letter-spacing: 0.03em;\n  height: 48px;\n  line-height: 48px;\n  padding: 0.3em 1.25rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: background 0.25s; }\n\n.ng2-menu-item--selected {\n  background: rgba(158, 158, 158, 0.2);\n  outline: 0; }\n\n.ng2-menu-item:focus {\n  outline: 0; }\n\n.ng2-menu-item:active {\n  background: rgba(158, 158, 158, 0.4); }\n\n:host(ng2-menu-item) /deep/ [ng2-menu-item-icon] {\n  vertical-align: middle;\n  font-size: 28px;\n  width: 1.5em;\n  height: 30px;\n  color: rgba(0, 0, 0, 0.44); }\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "<div class='ng2-menu-item'\n     role=\"button\"\n     tabindex=\"0\"\n     [class.ng2-menu-item--selected]=\"isSelected\"\n     (keydown.enter)=\"click()\"\n     (click)=\"click()\"\n     (mouseover)=\"select()\">\n        <ng-content></ng-content>\n</div>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = ".ng2-dropdown-menu {\n  z-index: 100;\n  overflow-y: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);\n  position: absolute;\n  padding: 0.5em 0;\n  background: #fff;\n  border-radius: 1px;\n  max-height: 400px;\n  width: 260px;\n  display: block; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--inside-element {\n  position: fixed; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--2 {\n  width: 200px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--4 {\n  width: 260px; }\n\n.ng2-dropdown-menu.ng2-dropdown-menu--width--6 {\n  width: 320px; }\n\n.ng2-dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  overflow: hidden; }\n\n:host /deep/ .ng2-menu-divider {\n  height: 1px;\n  min-height: 1px;\n  max-height: 1px;\n  width: 100%;\n  display: block;\n  background: #f9f9f9; }\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = "<!-- MENU -->\n<div class='ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}'\n     [class.ng2-dropdown-menu--inside-element]=\"!appendToBody\"\n     [class.ng2-dropdown-menu--open]=\"state.menuState.isVisible\"\n     [@fade]=\"state.menuState.toString()\">\n        <div class=\"ng2-dropdown-menu__options-container\"\n             [@opacity]=\"state.menuState.toString()\">\n            <ng-content></ng-content>\n        </div>\n</div>\n\n<!-- BACKDROP -->\n<div class=\"ng2-dropdown-backdrop\" *ngIf=\"state.menuState.isVisible\" (click)=\"hide()\"></div>\n";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"ng2-dropdown-container\">\n    <ng-content select=\"ng2-dropdown-button\"></ng-content>\n    <ng-content select=\"ng2-dropdown-menu\"></ng-content>\n</div>\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=ng2-dropdown.map