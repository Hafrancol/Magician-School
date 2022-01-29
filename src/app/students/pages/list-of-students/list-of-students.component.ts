import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-list-of-students',
  templateUrl: './list-of-students.component.html',
  styleUrls: ['./list-of-students.component.scss']
})
export class ListOfStudentsComponent implements OnInit {

	students:Character[] = [];
	inputText:string = '';

  constructor(
		private globalService:GlobalServicesService,
		private router:Router
	) { }

 
  ngOnInit(): void {//fetch the data
		this.globalService.getAllStudents();

  }

	inputEvent(inputValue:string){ // recive the input event to press the key
		this.inputText = inputValue
	}

	getStudents():Character[]{ // get students and filter by name or lastname
		this.students = this.globalService.getStudents
		if(this.inputText === '') return this.globalService.getStudents

		return this.globalService.getStudents.filter(({name})=>{
			return name.toLowerCase().includes(this.inputText.toLowerCase())
		})
	}


}
