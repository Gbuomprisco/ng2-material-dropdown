import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownStateProvider } from '../dropdown/ng2-dropdown.d';

const KEYS = {
    ENTER: 13,
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40
};

const onSwitchNext = (index: number, items: Ng2MenuItem[], state: Ng2DropdownStateProvider) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};

const onSwitchPrev = (index: number, items: Ng2MenuItem[], state: Ng2DropdownStateProvider) => {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};

const onBackspace = (index: number, items: Ng2MenuItem[], state: Ng2DropdownStateProvider) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    } else {
        state.select(items[0], true);
    }
};

const onEnter = (index: number, items: Ng2MenuItem[], state: Ng2DropdownStateProvider) => {
    state.onItemClicked.emit(state.selectedItem);
};

export const ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext,
    [KEYS.ENTER]: onEnter
};
