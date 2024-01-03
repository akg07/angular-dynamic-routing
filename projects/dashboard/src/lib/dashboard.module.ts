import { NgModule } from '@angular/core';
import { ApplicationListComponent } from './application-list/application-list.component';
import { ApplicationViewComponent } from './application-view/application-view.component';



@NgModule({
  declarations: [
    ApplicationListComponent,
    ApplicationViewComponent
  ],
  imports: [
  ],
  exports: [
  ]
})
export class DashboardModule { }
