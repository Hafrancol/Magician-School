import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { GlobalServicesService } from 'src/app/services/global-services.service';


@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.scss']
})
export class HousePageComponent implements OnInit {
	idAllowed :string [] = ['gryffindor',	'hufflepuff','ravenclaw','slytherin'] // the houses allowed
	characters:Character[] = [];
	inputText:string = '' // to save the value that recive about text input

	id:string = '' // save the id in the url, this this cases is the houses

  constructor(
			private activatedRoute: ActivatedRoute,
			private globalService:GlobalServicesService,
			private router:Router
	) { }

  ngOnInit(): void { // When start the OnInit, do the fetch the data

		const {id} = this.activatedRoute.snapshot.params; // recive the id reading the url

		if(!this.idAllowed.includes(id)){ // if this URL doesn't match with the houses list, return to the home
			this.router.navigateByUrl('')
		}

		this.globalService.getHouseByName(id) // fetch the data
		this.id = id

  }

	inputEvent(inputValue:string){ // read the input event when write every letter, save the value
		this.inputText = inputValue
	}

	getStudents():Character[]{ // get the all students or get with the word input does match with the name of characters
		this.characters = this.globalService.getStudents

		if(this.inputText === '') return this.globalService.getStudents // return all characters if don't hace input value

		return this.globalService.getStudents.filter(({name})=>{ // return names does match with the input
			return name.toLowerCase().includes(this.inputText.toLowerCase())
		})
	}


}
