import { Component, OnInit } from '@angular/core';

interface MainMenu {
	text : string,
	ruta : string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	mainMenu : MainMenu [] = [
		{
			text:'Students',
			ruta:'/students'
		},
		{
			text:'Teachers',
			ruta:'/teachers'
		},
		{
			text:'Houses',
			ruta:'/houses'
		}
	] 

  constructor() { }

  ngOnInit(): void {
  }

}
