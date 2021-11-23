import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcmpComponent } from './firstcmp/firstcmp.component';
import { SecondcmpComponent } from './secondcmp/secondcmp.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { TwowaydatabindingComponent } from './twowaydatabinding/twowaydatabinding.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcmpComponent,
    SecondcmpComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventhandlingComponent,
    TwowaydatabindingComponent,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
