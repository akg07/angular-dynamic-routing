import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
  ],
  exports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ]
})
export class UtilsModule { }
