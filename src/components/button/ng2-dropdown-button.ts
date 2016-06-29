import {
    Component,
    Output,
    EventEmitter,
    ElementRef
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown-button',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2DropdownButton {
    @Output() public onMenuToggled = new EventEmitter();

    constructor(private element: ElementRef) {

    }

    public toggleMenu() {
        this.onMenuToggled.emit(true);
    }

    public getPosition() {
      const el = this.element.nativeElement;
      return el.getBoundingClientRect();
    }

    ngOnInit() {

    }
}
