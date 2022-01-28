import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [

	{
		path:'',
		loadChildren: ()=> import ('./shared/shared.module')
			.then(m=>m.SharedModule)
	},	
	{
		path:'students',
		loadChildren: () => import('./students/students.module')
			.then(m => m.StudentsModule)
	},
	{
		path:'teachers',
		loadChildren: () => import('./teachers/teachers.module')
			.then(m => m.TeachersModule)
	},
	{
		path:'houses/:id',
		loadChildren: () => import('./houses/houses.module')
			.then(m => m.HousesModule)
	},
	{
		path:'**',
		redirectTo:''
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
