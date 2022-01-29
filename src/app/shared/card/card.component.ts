import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	@Input() character!:Character; // reading the father value about list of characters to show like card
	@Input() route = '';	
	

  constructor(
		private router:Router
	) { }

  ngOnInit(): void {
  }

	

	knowMoreAboutCharacter(){ // when click on card navigate to url

		if(this.character.hogwartsStudent){ // if is it student
			this.router.navigateByUrl(`students/listofstudents/${this.character.name}`)
		}
		else if(this.character.hogwartsStaff){ // if is it techer
			this.router.navigateByUrl(`teachers/listofteachers/${this.character.name}`)

		}else if(!this.character.hogwartsStudent && !this.character.hogwartsStaff){ // not teacher and student
			this.router.navigateByUrl('')
		}


	}

}
