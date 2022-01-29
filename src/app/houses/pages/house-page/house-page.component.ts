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
	idAllowed :string [] = ['gryffindor',	'hufflepuff','ravenclaw','slytherin']
	characters:Character[] = [];
	inputText:string = ''

	id:string = ''

  constructor(
			private activatedRoute: ActivatedRoute,
			private globalService:GlobalServicesService,
			private router:Router
	) { }

  ngOnInit(): void {
		const {id} = this.activatedRoute.snapshot.params;
		if(!this.idAllowed.includes(id)){
			this.router.navigateByUrl('')
		}
		this.globalService.getHouseByName(id)
		this.id = id
		console.log(id)
  }

	inputEvent(inputValue:string){
		this.inputText = inputValue
	}

	getStudents():Character[]{
		this.characters = this.globalService.getStudents

		if(this.inputText === '') return this.globalService.getStudents

		return this.globalService.getStudents.filter(({name})=>{
			return name.toLowerCase().includes(this.inputText.toLowerCase())
		})
	}


}
