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
export var ACTIONS = (_a = {},
    _a[KEYS.BACKSPACE] = onBackspace,
    _a[KEYS.PREV] = onSwitchPrev,
    _a[KEYS.NEXT] = onSwitchNext,
    _a[KEYS.ENTER] = onItemClicked,
    _a);
export function arrowKeysHandler(event) {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
var _a;
//# sourceMappingURL=actions.js.map