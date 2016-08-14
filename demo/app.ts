import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './home/home';

import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:      [BrowserModule],
    bootstrap:    [App],
    declarations: [App]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
