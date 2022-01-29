import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalServicesService } from '../../../services/global-services.service';
import { Character } from '../../../interfaces/characters.interface';

@Component({
  selector: 'app-students-by-id',
  templateUrl: './students-by-id.component.html',
  styleUrls: ['./students-by-id.component.scss']
})
export class StudentsByIdComponent implements OnInit {
	studentId:string = '';
	student!: Character 

  constructor(
		private router:Router,
		private activatedRoute:ActivatedRoute,
		private GlobalServices:GlobalServicesService
	) { 

	
	}

  ngOnInit(): void {
		const {id } = this.activatedRoute.snapshot.params
		this.studentId = id;
		this.GlobalServices.getAllStudents();
  }

	getStudentById(){
		

		const student = this.GlobalServices.getStudents.filter(({name})=>{
			return name.toLowerCase().includes(this.studentId.toLowerCase())
		})
		if(student.length===0) {
			this.router.navigateByUrl('')
		}

		this.student = student[0];
		return student[0]
		
	
	
	}

}
