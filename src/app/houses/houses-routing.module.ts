import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GryffindorComponent } from './pages/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './pages/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './pages/slytherin/slytherin.component';

const routes: Routes = [
	{
		path:'',
		children:[
			{
				path:'gryffindor',
				component:GryffindorComponent
				
			},
			{
				path:'hufflepuff',
				component:HufflepuffComponent
				
			},
			{
				path:'ravenclaw',
				component:RavenclawComponent
				
			},
			{
				path:'slytherin',
				component:SlytherinComponent
			},
			{
				path:'**',
				redirectTo:'gryffindor'
			}
			
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
