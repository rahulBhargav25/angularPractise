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
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcmpComponent,
    SecondcmpComponent,
    InterpolationComponent,
    PropertybindingComponent,
    EventhandlingComponent,
    TwowaydatabindingComponent,
    DirectivesComponent,
    PipedemoComponent,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component
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
