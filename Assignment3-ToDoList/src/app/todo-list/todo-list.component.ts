import { Component, TemplateRef } from '@angular/core';
import { Todo } from '../class/todo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoValue: string = '';

  todoList: Todo[] = [
    {
      content: "Clean the room",
      value: false
    },
    {
      content: "Go for cycling",
      value: false
    },
    {
      content: "Go to market",
      value: false
    },
  ];
  finishedList: Todo[] = [

  ]
  constructor(private modalService: NgbModal){}

  addTodo(val:any){
    if(val.value.length > 0){

    this.todoList.push({content:this.todoValue,value:false});
    this.todoValue = '';
  }
}
  changeTodo(i : number){
    const item = this.todoList.splice(i,1);
    console.log(item);
    this.finishedList.push(item[0]);
  }

  changeFinished(i: number){
    const item = this.finishedList.splice(i,1);
    this.todoList.push(item[0]);
  }

  openModal(content: TemplateRef<Element>, i: number, type: string){
    this.modalService.open(content,{ariaLabelledBy: 'modal-basic-title'}).result.then(
      (result)=>{
        if(type == 'todoList'){
          this.todoList.splice(i,1);
        }
        else{
          this.finishedList.splice(i,1);  
        }
      },
      (reason)=>{

      }
    )
  }
}
