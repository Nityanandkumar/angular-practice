import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { SharedModule } from './shared/shared.module';

//ngModule is an module . we are using is replacement of standalone components and standalone components are recommended way.
// modules are grouping components together and structing an application
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    TaskComponent,
    NewTaskComponent,
  ], // we need to initalize all the components here. like grouping. for non standalone components
  bootstrap: [AppComponent], //it typicallys just one, that consists of single tree of components with which i wanna start application
  imports: [BrowserModule, FormsModule, SharedModule], // imports array is an not just  for enabling  standalone components but also for including other modules
})
export class AppModule {}