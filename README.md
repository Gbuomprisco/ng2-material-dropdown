# Angular2 Dropdown Component

Material-like dropdown component for Angular2.

**Work in progress, not available yet from NPM**

## Install

    npm install ng2-dropdown --save

## Demo
TODO

## Usage

Once installed, import the directives and use it them your container component:


    // example.html
    <ng2-dropdown>
        <ng2-dropdown-button>
            Open Menu
        </ng2-dropdown-button>
        <ng2-dropdown-menu>
            <ng2-menu-item *ngFor="let page of pages">
                {{ page }}
            </ng2-menu-item>
            <ng2-menu-divider></ng2-menu-divider>
            <ng2-menu-item>
                With Divider
            </ng2-menu-item>
        </ng2-dropdown-menu>
    </ng2-dropdown>
    
    // app.ts
    // import all needed directives
    import { NG2_DROPDOWN_DIRECTIVES } from 'ng2-dropdown';
    
    @Component({
        selector: 'app',
        directives: [ ...NG2_DROPDOWN_DIRECTIVES ],
        template: require('./example.html')
    })
    
    export class App {
        pages = ['Home', 'Explore', 'Help'];
    }
    
 
## API
TODO...