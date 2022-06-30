import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../models/menuItem';
@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  equipment: MenuItem[] = [
    {
      title: "Dashboard",
      imagePath: '../../assets/img/dashbord.svg',
      path: "/dashboard"
    },
    {
      title: "Reports",
      imagePath: '../assets/img/reports.svg',
      path: "/reports"
    },
    {
      title: "Financial",
      imagePath: '../assets/img/financial.svg',
      path: "/financial"
    },
    {
      title: "Projects",
      imagePath: '../assets/img/projects.svg',
      path: "/projects"
    },
    {
      title: "Employee Information",
      imagePath: '../assets/img/empInfp.svg',
      path: "/employeeinformation",
      submenu:[
        {
          title: "Employee",
          imagePath: '../assets/img/employee.svg',
          path: "/employee"
        },
        {
          title: "Calendar",
          imagePath: '../assets/img/calendar.svg',
          path: "/calendar"
        },
        {
          title: "Day Offs",
          imagePath: '../assets/img/dayoffs.svg',
          path: "/dayoffs"
        },
        {
          title: "Holidays",
          imagePath: '../assets/img/holidays.svg',
          path: "/holidays"
        },
      ]
    },
    {
      title: "Settings",
      imagePath: '../assets/img/settings.svg',
      path: "/settings",
      submenues: [
        {
          title: "Expense Categories",
          imagePath: '../assets/img/expCat.svg',
          path: "/expensecategories"
        },
        {
          title: "Recurring expenses",
          imagePath: '../assets/img/recExp.svg',
          path: "/recurringexpenses"
        },
      ]
    },
    {
      title: "Website",
      imagePath: '../assets/img/website.svg',
      path: "/website"
    }
  ];
}
