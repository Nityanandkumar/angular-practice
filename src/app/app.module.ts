import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
//ngModule is an module . we are using is replacement of standalone components and standalone components are recommended way.
// modules are grouping components together and structing an application
@NgModule ({
    declarations : [AppComponent],// we need to initalize all the components here. like grouping
    bootstrap: [AppComponent] //it typicallys just one, that consists of single tree of components with which i wanna start application
})

export class AppModule{}