import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownState } from '../dropdown/ng2-dropdown-state';

const KEYS = {
    ENTER: 13,
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40
};

const onSwitchNext = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};

const onSwitchPrev = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};

const onBackspace = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    } else {
        state.select(items[0], true);
    }
};

const onEnter = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    state.onItemClicked.emit(state.selectedItem);
};

export const ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext,
    [KEYS.ENTER]: onEnter
};
