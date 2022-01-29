import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

	private students:Character [] = [];
	baseURL = 'http://hp-api.herokuapp.com/api/characters';

  constructor(
		private http: HttpClient
	) { }

	get getStudents():Character[]{
		return [...this.students]
	}

	getHouseByName(houseName: string){
	
		this.http.get<Character[]>(`${this.baseURL}/house/${houseName}`)
			.subscribe((students)=>{
				
				this.students = students
				console.log(this.students)
			})

	}

	getAllStudents(){

		this.http.get<Character[]>(`${this.baseURL}/students`)
			.subscribe((students)=>{
				this.students = students
			})


	}
}
