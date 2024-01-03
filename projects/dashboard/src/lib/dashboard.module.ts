import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationViewComponent } from './application-view/application-view.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ApplicationListComponent,
    ApplicationViewComponent
  ],
  imports: [
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
