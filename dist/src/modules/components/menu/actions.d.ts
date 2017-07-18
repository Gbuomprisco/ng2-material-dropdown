import { Ng2MenuItem } from '../menu-item/ng2-menu-item';
import { Ng2DropdownState } from '../../services/ng2-dropdown-state';
export declare const ACTIONS: {
    [x: number]: (index: number, items: Ng2MenuItem[], state: Ng2DropdownState) => void;
};
export declare function arrowKeysHandler(event: any): void;
