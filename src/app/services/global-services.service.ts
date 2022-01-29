import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GlobalServicesService {

	private students:Character [] = []; 
	private teachers:Character [] = [];

	baseURL = 'http://hp-api.herokuapp.com/api/characters';

  constructor(
		private http : HttpClient
	) { }

	get getStudents() : Character [] { // this is the way to get students and return a spred students
		return [...this.students];
	}

	get getTeachers() : Character [] {// this is the way to get teachers and return a spred teachers
		return [...this.teachers]
	}

	getHouseByName( houseName : string ){ // recive the house to do the fetch, if the answer is okay save the students
	
		this.http.get<Character[]>(`${this.baseURL}/house/${houseName}`)
			.subscribe(
				
				(students)=>{				
				this.students = students;
			},

			(error)=>{ //If error exist, empty the data
				if(error){
					this.students = [],
					console.log(new Error('Error in getHouseByName'));
				}
			})
			

	}

	getAllStudents(){ // Do the fetch to get all students 

		this.http.get<Character[]>(`${this.baseURL}/students`)
			.subscribe((students)=>{
				this.students = students
			},
			(error)=>{
				if(error){
					this.students = [],
					console.log(new Error('Error in getAllStudents'))
				}
			})


	}

	getAllTeachers(){
		this.http.get<Character[]>(`${this.baseURL}/staff`)
		.subscribe((teachers)=>{
			this.teachers = teachers
		},
		(error)=>{
			if(error){
				this.teachers = [],
				console.log(new Error('Error in getAllTeachers'))
			}
		})

	}
}
