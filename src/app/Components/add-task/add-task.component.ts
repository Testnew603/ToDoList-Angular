import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Model/task-model';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    constructor(private _taskService : TaskServiceService) { }
    public taskList : TaskModel [] = [];
    id: number = 1;
    name: string = '';
    description: string = '';
    status: boolean = true;
    priority: string = "primary"

  ngOnInit() {
       
  }   

  addTask(){
    this._taskService.addTask({
        name: this.name
      , description: this.description
      , status: this.status
      , priority: this.priority
    });
      this.name = '';
      this.description = '';
      this.status = true;
      this.priority = "primary"           
  }

  removeTask(index:number){
      this._taskService.removeTask(index);
  }
}
