import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { MainPageStudentsComponent } from './pages/main-page-students/main-page-students.component';
import { StudentsByIdComponent } from './pages/students-by-id/students-by-id.component';
import { ListOfStudentsComponent } from './pages/list-of-students/list-of-students.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageStudentsComponent,
    StudentsByIdComponent,
    ListOfStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
		SharedModule
  ]
})
export class StudentsModule { }
