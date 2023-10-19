import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Model/task-model';
import { TaskServiceService } from 'src/app/Services/task-service.service';

@Component({
  selector: 'app-remove-task',
  templateUrl: './remove-task.component.html',
  styleUrls: ['./remove-task.component.css']
})
export class RemoveTaskComponent implements OnInit {
  
  constructor(private _taskService : TaskServiceService) { }
  public taskList: TaskModel[] = [];
  id: number = 1;
  name: string = '';
  description: string = '';
  status: boolean = true;
  priority: string = "primary";  

  ngOnInit() {
    this.taskList = this._taskService.getTaskList();
       
  }

  removeTask(index: number){
     this._taskService.removeTask(index)
  }
}
