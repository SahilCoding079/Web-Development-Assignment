import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  UserName = "Enter Student Name";

  studentList = [] as any
  addStudent(val: any) {
    if (val.value.length > 0) {
      // It will add a new student in the list
      this.studentList.push(val.value)
      // It will clear the input box
      val.value = ''
    }
  }

  dltStud(del: any) {
    this.studentList.splice(del, 1)
  }

}
