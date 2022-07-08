import { Component, OnInit} from '@angular/core';
import { Projects } from '../models/projects';
import { ProjectService } from '../services/project.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
export interface Fruit {
  name: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})

export class ProjectsComponent implements OnInit {
  projectData!: Projects[]
  data: any;
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects()
    this.getItemsFromLocalStorage()
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe((data)=>{
    this.projectData = data
    })
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Stripe'}, {name: 'MySQL'}, {name: 'Angular'}];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

        // Add our fruit
        if (value) {
          this.fruits.push({name: value});
        }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
// hmi projectner avelcneluc kmtnis jsoni mijic kavelcnes jog?bayc es ameni kazmakerpel@ che
// skzbic ksarges model or krnanas .title .esim inch jogir or se or unis error chta
// ksarges service meje kdnes jsonid path urdexic or pti karda datan
// ksarges method function vornor kvercne http ic ed sax datan u es tsi mej kveragrenq me urish popoxakani
// mer depqum projectData popoxakanne sor vra pti cikl fras htmli mej u tpes jog?ha inchxor te naye hmi ertanq service

getItemsFromLocalStorage(): void{
  const data = JSON.parse(localStorage.getItem('data') || '{}')
  this.data = data;
  console.log(this.data)
}
}
