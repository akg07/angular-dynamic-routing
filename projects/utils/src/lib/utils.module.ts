import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class UtilsModule { }
