import { Component, OnInit } from '@angular/core';
import { Character } from '../../../interfaces/characters.interface';
import { GlobalServicesService } from '../../../services/global-services.service';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.scss']
})
export class GryffindorComponent implements OnInit {

	students:Character[] = [];
	inputText:string = ''

  constructor(
		private globalService:GlobalServicesService
	) { }

  ngOnInit(): void {
		this.globalService.getHouseByName('gryffindor')

  }

	inputEvent(inputValue:string){
		this.inputText = inputValue
	}

	getStudents():Character[]{

		if(this.inputText === '') return this.globalService.getStudents

		return this.globalService.getStudents.filter(({name})=>{
			return name.toLowerCase().includes(this.inputText.toLowerCase())
		})
	}


}
