import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/interfaces/characters.interface';
import { GlobalServicesService } from 'src/app/services/global-services.service';

@Component({
  selector: 'app-teachers-by-id',
  templateUrl: './teachers-by-id.component.html',
  styleUrls: ['./teachers-by-id.component.scss']
})
export class TeachersByIdComponent implements OnInit {
	teachersId:string = '';
	teachers!: Character 

  constructor(
		private router:Router,
		private activatedRoute:ActivatedRoute,
		private globalServices:GlobalServicesService
	) { }

	ngOnInit(): void {
		const {id } = this.activatedRoute.snapshot.params
		this.teachersId = id;
		this.globalServices.getAllTeachers();
  }

	getTeacherById(){
		

		const teacher = this.globalServices.getTeachers.filter(({name})=>{
			return name.toLowerCase().includes(this.teachersId.toLowerCase())
		})
		if(teacher.length===0) {
			this.router.navigateByUrl('')
		}

		this.teachers = teacher[0];
		return teacher[0]
		
	
	
	}


}
