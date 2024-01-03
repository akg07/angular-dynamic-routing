import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfigService } from './service/route-config.service';
import { DashboardComponent } from 'projects/dashboard/src/lib/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'placeholder', loadChildren: () => import('./placeholder/placeholder.module').then(m => m.PlaceholderModule)},
  // {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(
    private routeConfigService: RouteConfigService
  ) {
    // console.log('routeConfigService')
    // this.configureRoutes();
  }

  configureRoutes() {
    this.routeConfigService.getClientRoutes()?.subscribe((routes: Routes) => {
      console.log(routes);
      RouterModule.forRoot(routes);
    })
  }

}
