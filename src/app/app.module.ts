import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { TransformButtonComponent } from './shared/components/button/transform-button/transform-button.component';
import { HeaderModule } from './core/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoaderComponent,
    TransformButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
