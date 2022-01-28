import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HousePageComponent } from './pages/house-page/house-page.component';


const routes: Routes = [
	{
		path:'',
		component:HousePageComponent
		
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesRoutingModule { }
