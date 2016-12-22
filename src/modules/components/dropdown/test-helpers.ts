import { Component, NgModule } from '@angular/core';
import { Ng2DropdownModule } from '../../../index';

@Component({
    selector: 'basic-dropdown',
    template: `
        <main>
        <ng2-dropdown>
            <ng2-dropdown-button>
                Open
            </ng2-dropdown-button>
            <ng2-dropdown-menu>
                <ng2-menu-item>
                    First item
                </ng2-menu-item>
                <ng2-menu-item [preventClose]="true">
                    Second item
                </ng2-menu-item>
            </ng2-dropdown-menu>
        </ng2-dropdown>
        </main>
    `
})
export class BasicDropdown {
    ngOnInit() {}
}

@NgModule({
    declarations: [
        BasicDropdown
    ],
    imports: [Ng2DropdownModule],
    exports: [BasicDropdown]
})
export class TestModule {}
