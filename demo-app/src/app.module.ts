import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownContainer } from './components/dropdown-container';
import { CommonModule } from '@angular/common';
import { Ng2DropdownModule } from '../../src/modules/ng2-dropdown.module';

@NgModule({
    declarations: [AppComponent, DropdownContainer],
    imports: [BrowserAnimationsModule, CommonModule, Ng2DropdownModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
