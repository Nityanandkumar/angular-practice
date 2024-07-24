import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

//ngModule is an module . we are using is replacement of standalone components and standalone components are recommended way.
// modules are grouping components together and structing an application
@NgModule ({
    declarations : [AppComponent,HeaderComponent,UserComponent,CardComponent,TasksComponent,TaskComponent,NewTaskComponent],// we need to initalize all the components here. like grouping. for non standalone components
    bootstrap: [AppComponent], //it typicallys just one, that consists of single tree of components with which i wanna start application
    imports:[BrowserModule,FormsModule] // imports array is an not just  for enabling  standalone components but also for including other modules
})

export class AppModule{}