import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CifraComponent } from './cifra/cifra.component';
import { SecaoComponent } from './secao/secao.component';

@NgModule({
  declarations: [
    AppComponent,
    CifraComponent,
    SecaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
