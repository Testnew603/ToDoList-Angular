import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/Model/task-model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    constructor() { }
    public taskList : TaskModel [] = [];

  ngOnInit() {
  }
    NEW_TASK = {
    name: "",
    description: "",
    status: true,
    priority: "primary"
  };

  addTask(){
    this.taskList.push({...this.NEW_TASK});
  }

  removeTask(index:number){
    if(index > -1){
      this.taskList.splice(index,1);
    }    
  }

  editTask(index:number, name:string, description:string){
    if(index > -1){
      const editValue: TaskModel = {
        name: name,
        description: description
      };
      this.taskList[index] = editValue
    }
  }
}
