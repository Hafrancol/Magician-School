import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() character!:Character;
	@Input() route = '';	
	

  constructor(
		private router:Router
	) { }

  ngOnInit(): void {
  }

	studentsId(){
		this.router.navigateByUrl('students/listofstudents/45')
	}

	knowMoreAboutCharacter(){

		if(this.character.hogwartsStudent){
			this.router.navigateByUrl(`students/listofstudents/${this.character.name}`)
		}else{
			console.log('RUTA PROFESOR')
		}

	}

}
