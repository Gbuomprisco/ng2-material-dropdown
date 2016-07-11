# Angular2 Dropdown Component

Material-like dropdown component for Angular2.

**Work in progress**

## Install

    npm install ng2-material-dropdown --save

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
    import { NG2_DROPDOWN_DIRECTIVES } from 'ng2-material-dropdown';
    
    @Component({
        selector: 'app',
        directives: [ ...NG2_DROPDOWN_DIRECTIVES ],
        template: require('./example.html')
    })
    
    export class App {
        pages = ['Home', 'Explore', 'Help'];
    }
    
 
## API

**`ng2-dropdown`**
`onItemSelected()` - `[(onItemSelected($event)]` : event that emits the currently selected/hovered item
`onItemClicked()` - `[(onItemClicked($event)]` : event that emits the item clicked on


**`ng2-dropdown-button`**
`showCaret` - `[?boolean]` : if present, a caret will be appended to the button's text


**`ng2-menu-item`**
`preventClose` - `[?boolean]` : if present, this attribute prevents the menu to hide when the menu item is clicked
