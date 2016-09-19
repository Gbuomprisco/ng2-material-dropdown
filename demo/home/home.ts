import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./home.html')
})

export class App {
    pages = ['Home', 'Explore', 'Help'];
    constructor() {

    }

    ngOnInit() {

    }
}
