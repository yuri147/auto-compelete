import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { AutoCompleteService } from './auto-complete/auto-compelete.service';

@NgModule({
  declarations: [AppComponent, AutoCompleteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AutoCompleteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
