import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Model/task-model';
import { TaskServiceService } from 'src/app/Services/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private _taskService : TaskServiceService, private route: ActivatedRoute) { }
  public taskList : TaskModel [] = [];
    name: string = '';
    description: string = '';
    status: boolean = true;
    priority: string = "primary"

    ngOnInit() {
      this.route.params.subscribe((params => {
        const taskId = +params['id'];
        const task = this._taskService.getTaskById(taskId);
        if(task){
          this.taskList = [task]
        }
      }));                  
    }  

    editTask(index:number, updatedTask: TaskModel){
      this._taskService.getTaskById(index);        
  }
}

 