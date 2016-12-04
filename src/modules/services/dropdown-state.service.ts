import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Ng2DropdownState } from './ng2-dropdown-state';

@Injectable()
export class DropdownStateService {
    menuState = {
        isVisible: false,
        toString() {
            return this.isVisible === true ? 'visible' : 'hidden';
        }
    };

    dropdownState = new Ng2DropdownState();

    constructor() {}
}
