import { NgModule } from '@angular/core';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationViewComponent,
    DashboardComponent
  ],
  imports: [
  ],
  exports: [
    ApplicationListComponent,
    ApplicationViewComponent,
    DashboardComponent
  ]
})
export class DashboardModule { }
