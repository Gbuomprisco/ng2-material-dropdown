import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './home/home';

import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2DropdownModule } from '../src/modules/ng2-dropdown.module';

@NgModule({
    imports:      [BrowserModule, Ng2DropdownModule],
    bootstrap:    [App],
    declarations: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
