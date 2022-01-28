import { Component, OnInit } from '@angular/core';
import { MainMenu } from '../interfaces/routes.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	mainMenu : MainMenu [] = [
		{
			text:'Students',
			route:'/students'
		},
		{
			text:'Teachers',
			route:'/teachers'
		},
		
	] 
  constructor() { }

  ngOnInit(): void {
  }

}
