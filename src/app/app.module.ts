import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskServiceService } from './Services/task-service.service';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { EditTaskComponent } from './Components/edit-task/edit-task.component';
import { RemoveTaskComponent } from './Components/remove-task/remove-task.component';

const appRoutes: Routes = [
  { path: '', component: RemoveTaskComponent},
  { path: 'add-task', component: AddTaskComponent},
  { path: 'edit-task/:id', component: EditTaskComponent },
  { path: 'remove-task/:id', component: RemoveTaskComponent},
];

@NgModule({

  declarations: [
    AppComponent,
    AddTaskComponent,
    EditTaskComponent,
    RemoveTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  exports: [RouterModule], 
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
