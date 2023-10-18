import { Injectable } from '@angular/core';
import { TaskModel } from '../Model/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { this.taskList = [] }

  private taskList: TaskModel [] = [];   

    addTask(taskList: TaskModel) {
      this.taskList.push (taskList);        
    }

    getTaskList(){
      return this.taskList;
    }

    removeTask(index: number){
      if(index > -1 && index < this.taskList.length){
        this.taskList.splice(index,1);
      }    
    }

    editTask(index:number, updatedTask: TaskModel){
      if (index > -1 && index < this.taskList.length) {
        this.taskList[index] = updatedTask;
      }
    }
}
