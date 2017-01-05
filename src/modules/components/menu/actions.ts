import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownState } from '../../services/ng2-dropdown-state';

const KEYS = {
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

export const ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext
};

export function arrowKeysHandler(event): void {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
