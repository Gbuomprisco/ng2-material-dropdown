import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownMenu } from './ng2-dropdown-menu';
import { Ng2DropdownState } from '../../services/ng2-dropdown-state';

const KEYS = {
    BACKSPACE: 9,
    PREV: 38,
    NEXT: 40,
    ENTER: 13,
    ESCAPE: 27
};

/**
 * @name onSwitchNext
 * @param index
 * @param items
 * @param state
 */
const onSwitchNext = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    }
};

/**
 * @name onSwitchPrev
 * @param index
 * @param items
 * @param state
 */
const onSwitchPrev = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index > 0) {
        state.select(items[index - 1], true);
    }
};

/**
 * @name onBackspace
 * @param index
 * @param items
 * @param state
 */
const onBackspace = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    if (index < items.length - 1) {
        state.select(items[index + 1], true);
    } else {
        state.select(items[0], true);
    }
};

function onEscape(this: Ng2DropdownMenu) {
    this.hide();
};

/**
 * @name onItemClicked
 * @param index
 * @param items
 * @param state
 */
const onItemClicked = (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => {
    return state.selectedItem ? state.selectedItem.click() : undefined;
};

export const ACTIONS = {
    [KEYS.BACKSPACE]: onBackspace,
    [KEYS.PREV]: onSwitchPrev,
    [KEYS.NEXT]: onSwitchNext,
    [KEYS.ENTER]: onItemClicked,
    [KEYS.ESCAPE]: onEscape
};

export function arrowKeysHandler(event): void {
    if ([38, 40].indexOf(event.keyCode) > -1) {
        event.preventDefault();
    }
}
