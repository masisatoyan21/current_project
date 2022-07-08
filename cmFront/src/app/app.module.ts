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
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { CreateProjectComponent } from './create-project/create-project.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    HolidaysComponent,
    CreateProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
