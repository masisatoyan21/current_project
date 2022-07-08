import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DayoffsComponent } from './dayoffs/dayoffs.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { DalendarComponent } from './dalendar/dalendar.component';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'financial', component: FinancialComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'employeeinformation', component: EmployeeInformationComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'website', component: WebsiteComponent},
  {path: 'expensecategories', component: ExpensecategoriesComponent},
  {path: 'recurringexpenses', component: RecurringexpensesComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'dayoffs', component: DayoffsComponent},
  {path: 'holidays', component: HolidaysComponent},
  {path: 'calendar', component: DalendarComponent},
  {path: 'create-project', component: CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
