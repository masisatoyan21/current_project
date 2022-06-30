import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle = ''
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    // routeri eventnerin subscribe kexnin or amen popoxutyune vercnenq
    this.route.events.subscribe((event)=>{
      // kstugenq ete eventt navigate exel prcel e
      if(event instanceof NavigationEnd){
        // stex kveragrenq mer popoxakanin eventi url u kjnjenq demi / substringov
        this.headerTitle = event.url.substring(1)
      }
    })
  }
}

