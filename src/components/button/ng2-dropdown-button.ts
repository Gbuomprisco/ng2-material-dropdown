import {
    Component,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown-button',
    styles: [],
    template: require('./template.html')
})
export class Ng2DropdownButton {
    constructor() {}

    @Output() onMenuToggled = new EventEmitter();

    toggleMenu() {
        this.onMenuToggled.emit(true);
    }

    ngOnInit() {

    }
}

