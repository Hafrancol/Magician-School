import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HousesRoutingModule } from './houses-routing.module';
import { GryffindorComponent } from './pages/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './pages/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './pages/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './pages/slytherin/slytherin.component';
import { HousePageComponent } from './pages/house-page/house-page.component';


@NgModule({
  declarations: [
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent,
    SlytherinComponent,
    HousePageComponent
  ],
  imports: [
    CommonModule,
    HousesRoutingModule
  ]
})
export class HousesModule { }
