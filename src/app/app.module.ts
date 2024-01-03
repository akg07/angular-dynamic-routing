import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'projects/utils/src/lib/header/header.component';
import { UtilsModule } from 'projects/utils/src/public-api';
import { DashboardModule } from 'projects/dashboard/src/public-api';
import { PlansModule } from 'projects/plans/src/public-api';
import { UsersModule } from 'projects/users/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilsModule,
    DashboardModule,
    PlansModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
