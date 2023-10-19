import { Injectable } from '@angular/core';
import { TaskModel } from '../Model/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() {
    this.taskList.push(new TaskModel(1, 'ABC', 'AAAA', true, 'primary'));
    this.taskList.push(new TaskModel(2, 'DEF', 'BBBB', false, 'primary'));
    this.taskList.push(new TaskModel(3, 'GHI', 'CCCC', true, 'primary'));
   }

  private taskList: TaskModel [] = []; 
  

    addTask(taskList: TaskModel) {
      const lastId = this.taskList[this.taskList.length - 1];
      const lastId1 = (lastId? lastId.id : 0) as number;
      taskList.id = lastId1 + 1;
      this.taskList.push (taskList);        
    }

    getTaskList(){
      return this.taskList;
    }

    getTaskById(index: number){
      return this.taskList.find(task => task.id === index)
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
