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
    name: string = '';
    description: string = '';
    status: boolean = true;
    priority: string = "primary"

  ngOnInit() {
  }   

  addTask(){
    this.taskList.push({name:this.name, description:this.description, status:this.status, priority:this.priority});
    this.name = '';
    this.description = '';
    this.status = true;
    this.priority = "primary"
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
