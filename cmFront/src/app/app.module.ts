import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { FinancialComponent } from './financial/financial.component';
import { ProjectsComponent } from './projects/projects.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { SettingsComponent } from './settings/settings.component';
import { WebsiteComponent } from './website/website.component';
import { ExpensecategoriesComponent } from './expensecategories/expensecategories.component';
import { RecurringexpensesComponent } from './recurringexpenses/recurringexpenses.component';
import { EmployeeComponent } from './employee/employee.component';
import { DalendarComponent } from './dalendar/dalendar.component';
import { DayoffsComponent } from './dayoffs/dayoffs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    SidenavMenuComponent,
    HeaderComponent,
    DashboardComponent,
    ReportsComponent,
    FinancialComponent,
    ProjectsComponent,
    EmployeeInformationComponent,
    SettingsComponent,
    WebsiteComponent,
    ExpensecategoriesComponent,
    RecurringexpensesComponent,
    EmployeeComponent,
    DalendarComponent,
    DayoffsComponent,
    HolidaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
