import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

	private students:Character [] = []

  constructor(
		private http: HttpClient
	) { }

	get getStudents():Character[]{
		return [...this.students]
	}

	getHouseByName(houseName: string){
		const baseURL = 'http://hp-api.herokuapp.com/api/characters/house'
		this.http.get<Character[]>(`${baseURL}/${houseName}`)
			.subscribe((students)=>{
				
				this.students = students
				console.log(this.students)
			})

	}
}
