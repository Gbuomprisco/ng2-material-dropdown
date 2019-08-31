import { Ng2DropdownModule } from './../../../src/modules/ng2-dropdown.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DropdownContainer } from 'src/app/components/dropdown-container';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, DropdownContainer],
  imports: [CommonModule, BrowserAnimationsModule, Ng2DropdownModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
