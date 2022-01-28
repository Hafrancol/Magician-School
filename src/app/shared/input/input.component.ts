import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

	inputText:string = ''
	@Output() inputEmitter = new EventEmitter <string>()
  constructor() { }

  ngOnInit(): void {
  }

	inputEvent(){
		this.inputEmitter.emit(this.inputText)
	}

}
