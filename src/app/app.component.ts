import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
		Details = new FormGroup({
		name: new FormControl('', Validators.required),
		email: new FormControl('', Validators.required),
		phoneNum: new FormControl('', Validators.required),
		country: new FormControl('', Validators.required),
		city: new FormControl('', Validators.required),
		state: new FormControl('', Validators.required),
		password: new FormControl('', Validators.required),
		passwordConfirm: new FormControl('', Validators.required),
		relation : new FormControl('', Validators.required),
		favFood : new FormControl('', Validators.required),
		favColor : new FormControl('', Validators.required)
	  });
	
	constructor() {}
	
	selectedCountry: String = "--Select Country--";
  
	CountriesData: any[] = [
    { 
      name: 'India', 
      states: [ {
			name: 'Andhra Pradesh', 
			cities: [{
				name: "Visakhapatnam"
			},
		{
			name:"Vijayawada"
		},
	{
		name:"Guntur"
	}]
		},
	{
		name: "TamilNadu",
		cities:[{
			name: "Chennai"
		},
	{
		name: "Coimbatore"
	}]
	} ] 
  },

		{ 
			name: 'Norway', 
			states: [ {
				name: 'Northern State', 
				cities: [
					{
						name:"Oslo"
					},
					{
						name: "Trotsberg"
					}
				]
			},
		{
			name:'Southern State',
			cities: [{
				name: "Valhalla"
			},
		{
			name:"Aedda"
		}
	]
		} ] 
		
		},
	
	];
  
	statesList:any[];

	citiesList: any[];
	
	changeCountry(country) {
		this.statesList = this.CountriesData.find(i => i.name == country).states;
	}

	changeState(state) {
		this.citiesList = this.CountriesData.find(i => i.name == this.selectedCountry).states.find(p => p.name == state).cities;
		console.log(this.citiesList)
	}


	onSubmit(){
		!this.Details.valid ? alert('please enter required details') : alert('Thanks for the information')
	}
}