import { Injectable } from '@angular/core';
import { enviornment } from '../../assets/environment/environment';
import { Observable, of } from 'rxjs'; 
import { DashboardComponent } from 'projects/dashboard/src/lib/dashboard/dashboard.component';
import { ApplicationListComponent } from 'projects/dashboard/src/lib/application-list/application-list.component';
import { ApplicationViewComponent } from 'projects/dashboard/src/lib/application-view/application-view.component';
import { PlansComponent } from 'projects/plans/src/lib/plans/plans.component';
import { UsersListComponent } from 'projects/users/src/lib/users-list/users-list.component';
import { UsersViewComponent } from 'projects/users/src/lib/users-view/users-view.component';
import { ManageUserComponent } from 'projects/users/src/lib/manage-user/manage-user.component';

@Injectable({
  providedIn: 'root'
})
export class RouteConfigService {

  constructor() { }

  getClientRoutes(): Observable<any[]> {
    const clientConfig = this.getClientConfig();

    return of(clientConfig.routes);
  }

  getClientConfig() {
    const client_id = enviornment.client_id;
    console.log(`${enviornment.cilent_name} -----> ${client_id}`)

    const configMap:any = {
      // CPA
      'JCJNFMGHD-KSDHFD-KJSJASBF': {
        routes: [
          { path: 'plans', component: PlansComponent },
          { path: 'user-list', component: UsersListComponent },
          { path: 'user-view', component: UsersViewComponent},
          { path: 'user-manage', component: ManageUserComponent},
        ]
      },
      // Right works
      'JCHBJHD-KJDD-KJBDKBF': {
        routes: [
          { path: '/dashboard', component: DashboardComponent},
          { path: 'application0-list', component: ApplicationListComponent },
          { path: 'application-view', component: ApplicationViewComponent }, 
        ]
      }
    };

    return configMap[client_id] || { routes: [] };
  }
}
