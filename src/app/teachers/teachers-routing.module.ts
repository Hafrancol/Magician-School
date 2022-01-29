import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfTeachersComponent } from './pages/list-of-teachers/list-of-teachers.component';
import { TeachersByIdComponent } from './pages/teachers-by-id/teachers-by-id.component';

const routes: Routes = [
	{
		path:'',
		children:[
			{
				path:'listofteachers',
				component:ListOfTeachersComponent
			},
			{
				path:'listofteachers/:id',
				component:TeachersByIdComponent
			},
			{
				path:'**',
				redirectTo:'listofteachers'
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
