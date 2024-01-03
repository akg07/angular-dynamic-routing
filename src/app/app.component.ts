import { Component, OnInit } from '@angular/core';
import { RouteConfigService } from './service/route-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'angular-dynamic-routing';

  constructor(
    private routeConfigService: RouteConfigService,
    private router: Router
  ) {}


  ngOnInit(): void {
      this.routeConfigService.getClientRoutes()?.subscribe((routes: any[]) => {
        this.router.resetConfig(routes);
        // this.router.navigateByUrl('/');
      })
  }
}
