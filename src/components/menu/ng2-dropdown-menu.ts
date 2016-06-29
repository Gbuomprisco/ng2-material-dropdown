import {
  Component,
  ElementRef,
  Renderer,
  ContentChildren,
  QueryList
} from '@angular/core';

import {
  Ng2MenuItem
} from '../menu-item/ng2-menu-item';

@Component({
    moduleId: module.id,
    selector: 'ng2-dropdown-menu',
    styles: [ require('./style.scss').toString() ],
    template: require('./template.html')
})
export class Ng2DropdownMenu {
    @ContentChildren(Ng2MenuItem) items: QueryList<Ng2MenuItem>;

    private state = {
      isVisible: false
    };

    constructor(private element: ElementRef,
                private renderer: Renderer) {  }

    public show() {
      this.state.isVisible = true;
    }

    public hide() {
      this.state.isVisible = false;
    }

    public getState() {
      return this.state;
    }

    public updatePosition(position) {
      const el = this.element.nativeElement.children[0];
      const top = `${position.top - 10}px`;
      const left = `${position.left + 5}px`;

      this.renderer.setElementStyle(el, 'top', top);
      this.renderer.setElementStyle(el, 'left', left);
    }

    private appendToBody(): void {
      const body = document.querySelector("body");
      body.appendChild(this.element.nativeElement.parentElement);
    }

    ngOnInit() {
      this.appendToBody();
    }

    ngAfterContentInit() {
      this.items.forEach(item => {
        item.onItemClicked.subscribe(() => this.state.isVisible = false);
      });
    }
}
