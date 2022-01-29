import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { MainPageTeachersComponent } from './pages/main-page-teachers/main-page-teachers.component';
import { ListOfTeachersComponent } from './pages/list-of-teachers/list-of-teachers.component';
import { TeachersByIdComponent } from './pages/teachers-by-id/teachers-by-id.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MainPageTeachersComponent,
    ListOfTeachersComponent,
    TeachersByIdComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
		SharedModule
  ]
})
export class TeachersModule { }
