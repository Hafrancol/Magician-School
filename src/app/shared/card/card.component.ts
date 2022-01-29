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

	

	knowMoreAboutCharacter(){

		if(this.character.hogwartsStudent){
			this.router.navigateByUrl(`students/listofstudents/${this.character.name}`)
		}
		else if(this.character.hogwartsStaff){
			this.router.navigateByUrl(`teachers/listofteachers/${this.character.name}`)

		}else if(!this.character.hogwartsStudent && !this.character.hogwartsStaff){
			this.router.navigateByUrl('')
		}


	}

}
