# Angular2 Dropdown Component

Material-like dropdown component for Angular2.

**Work in progress**. Please do notice this is a work in progress and it is far from being usable in production.

## Install

    npm install ng2-material-dropdown --save

## Demo
Check out the demo at [http://www.webpackbin.com/Ey8sUC2UZ](http://www.webpackbin.com/Ey8sUC2UZ)

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

`ng2-dropdown`

- **`onItemSelected()`** - **`[(onItemSelected($event)]`** : event that emits the currently selected/hovered item
- **`onItemClicked()`** - **`[(onItemClicked($event)]`** : event that emits the item clicked on
- **`onShow()`** - **`[(onItemClicked($event)]`** : event that emits when the dropdown gets shown
- **`onHide()`** - **`[(onItemClicked($event)]`** : event that emits when the dropdown gets hidden


`ng2-dropdown-menu`
- **`focusFirstElement`** - **`[?boolean]`** : by default the first element is immediately focused. You can disable by setting this option to false
- **`width`** - **`[?number]`**: this determines the width of the menu. Possible values are 2, 4 and 6. By default, this is set to 4
- **`offset`** - **`[?string]`**: offset to adjust the position of the dropdown with absolute values

`ng2-dropdown-button`
- **`showCaret`** - **`[?boolean]`** : if present, a caret will be appended to the button's text


`ng2-menu-item`
- **`preventClose`** - `[?boolean]` : if present, this attribute prevents the menu to hide when the menu item is clicked
- **`value` - `[?any]`** : any value that you may want to attach to a menu item. Useful for using this component with other components.

