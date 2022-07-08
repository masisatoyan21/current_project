import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Technologies} from '../inerface/technologies';
import {CountryStatus} from '../inerface/country-status';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})

export class CreateProjectComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Technologies[] = [{name: 'Stripe'}, {name: 'MySQL'}, {name: 'YII / YII2'}, {name: 'Angular'}];
  dataArray:any[] = []
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Technologies): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  projectArray: any[] = []
  createProjectForm = new FormGroup({
    'title': new FormControl(''),
    'status': new FormControl(''),
    'client_name': new FormControl(''),
    'desc': new FormControl(''),
    'technologies': new FormControl(this.fruits)
  })
  selectedValue!: string;
  selectedCar!: string;

  foods: CountryStatus[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  constructor() { }

  ngOnInit(): void {
    this.getItemsFromStorage()

  }
  showForm(): void{
    const formParams = this.createProjectForm.getRawValue()
    this.projectArray.push(formParams)
    this.addIntoLocalStorage(this.projectArray)
  }

  addIntoLocalStorage(param: any): void{
    localStorage.setItem('project',JSON.stringify(param))
  }
  addProject(): void{
    const data = this.createProjectForm.getRawValue()
    this.dataArray.push(data)
    localStorage.setItem('data', JSON.stringify(this.dataArray))
  }
  getItemsFromStorage(): void{
    const dataFromStorage = JSON.parse(localStorage.getItem('data') || '{}');
    if(this.dataArray.length<1){
      this.dataArray = []
    }
    this.dataArray = dataFromStorage
  }
}
