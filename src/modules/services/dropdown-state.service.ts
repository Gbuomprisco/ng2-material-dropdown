import { Injectable } from '@angular/core';
import { Ng2DropdownState } from './ng2-dropdown-state';

@Injectable()
export class DropdownStateService {
    public menuState = {
        isVisible: <boolean>false,
        toString(): string {
            return this.isVisible === true ? 'visible' : 'hidden';
        }
    };

    public dropdownState: Ng2DropdownState = new Ng2DropdownState();
}
