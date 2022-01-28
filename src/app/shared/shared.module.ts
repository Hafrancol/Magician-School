import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MosaicComponent } from './mosaic/mosaic.component';
import { InputComponent } from './input/input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
		ButtonComponent,
		CardComponent,
		HeaderComponent,
		HomeComponent,
		MosaicComponent,
  	InputComponent,

	],
  imports: [
    CommonModule,
    SharedRoutingModule,
		FormsModule
  ],
	exports:[
		HeaderComponent,
		CardComponent,
		InputComponent
	]
})
export class SharedModule { }
