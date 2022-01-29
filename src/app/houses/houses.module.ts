import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { HousePageComponent } from './pages/house-page/house-page.component';		
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HousePageComponent,
	
  ],
  imports: [
    CommonModule,
    HousesRoutingModule,
		SharedModule
  ]
})
export class HousesModule { }
