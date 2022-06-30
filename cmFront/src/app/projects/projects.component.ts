import { Component, OnInit } from '@angular/core';
import { Projects } from '../models/projects';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectData!: Projects[]
  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void{
    this.projectService.getProjects().subscribe((data)=>{
    this.projectData = data
    console.log(this.projectData)
    })
  }
// hmi projectner avelcneluc kmtnis jsoni mijic kavelcnes jog?bayc es ameni kazmakerpel@ che
// skzbic ksarges model or krnanas .title .esim inch jogir or se or unis error chta
// ksarges service meje kdnes jsonid path urdexic or pti karda datan
// ksarges method function vornor kvercne http ic ed sax datan u es tsi mej kveragrenq me urish popoxakani
// mer depqum projectData popoxakanne sor vra pti cikl fras htmli mej u tpes jog?ha inchxor te naye hmi ertanq service
}
