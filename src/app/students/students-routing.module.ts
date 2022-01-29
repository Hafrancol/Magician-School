import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfStudentsComponent } from './pages/list-of-students/list-of-students.component';
import { StudentsByIdComponent } from './pages/students-by-id/students-by-id.component';

const routes: Routes = [
	{
		path:'',
		children:[
			{
				path:'listofstudents',
				component:ListOfStudentsComponent

			},
			{
				path:'listofstudents/:id',
				component: StudentsByIdComponent
			},
			{
				path:'**',
				redirectTo:'listofstudents'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
