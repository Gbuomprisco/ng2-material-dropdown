import {
  Component,
  Output,
  EventEmitter
 } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng2-menu-item',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2MenuItem {
    @Output() public onItemClicked = new EventEmitter<any>();

    constructor() {

    }

    ngOnInit() {

    }
}
