import { Component, Input, OnInit } from '@angular/core';
import { MainMenu } from '../../interfaces/mainMenu.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() menuInfo : MainMenu  = { text:'', route:''} // recive the routes to navigate and value about the button


  constructor() { }

  ngOnInit(): void {
  }

}
