import { Component, Input, OnInit } from '@angular/core';
import { MainMenu } from '../interfaces/routes.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input() menuInfo : MainMenu  = { text:'', route:''} 


  constructor() { }

  ngOnInit(): void {
  }

}
