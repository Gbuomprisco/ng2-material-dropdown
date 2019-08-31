import { Component } from '@angular/core';

@Component({
  selector: 'dropdown-container',
  template: `
    <ng2-dropdown>
      <ng2-dropdown-button>Open</ng2-dropdown-button>
      <ng2-dropdown-menu>
        <ng2-menu-item *ngFor="let option of options" [value]="option">
          {{ option.value }}
        </ng2-menu-item>
      </ng2-dropdown-menu>
    </ng2-dropdown>
  `
})
export class DropdownContainer {
  options = [{ value: 'me' }];
}
