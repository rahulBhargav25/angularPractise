import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcmpComponent } from './firstcmp/firstcmp.component';
import { SecondcmpComponent } from './secondcmp/secondcmp.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcmpComponent,
    SecondcmpComponent,
    InterpolationComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
