import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-list-of-teachers',
  templateUrl: './list-of-teachers.component.html',
  styleUrls: ['./list-of-teachers.component.scss']
})
export class ListOfTeachersComponent implements OnInit {

	teachers:Character[] = [];
	inputText:string = '';

  constructor(
		private globalService:GlobalServicesService,
		private router:Router
	) { }

  ngOnInit(): void {
	
		this.globalService.getAllTeachers()
  }

	inputEvent(inputValue:string){
		this.inputText = inputValue
	}

	getTeachers():Character[]{

		this.teachers = this.globalService.getTeachers

		if(this.inputText === '') return this.globalService.getTeachers

		return this.globalService.getTeachers.filter(({name})=>{
			return name.toLowerCase().includes(this.inputText.toLowerCase())
		})
	}

}
