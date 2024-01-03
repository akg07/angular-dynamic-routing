import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteConfigService } from './service/route-config.service';

const routes: Routes = [
  {path: 'placeholder', loadChildren: () => import('./app.module').then(m => m.AppModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(
    private routeConfigService: RouteConfigService
  ) {
    console.log('routeConfigService')
    this.configureRoutes();
  }

  configureRoutes() {
    this.routeConfigService.getClientRoutes()?.subscribe((routes: Routes) => {
      console.log(routes);
      RouterModule.forRoot(routes);
    })
  }

}
