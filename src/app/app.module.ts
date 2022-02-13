import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CifraComponent } from './cifra/cifra.component';
import { SecaoComponent } from './secao/secao.component';
import { ListaCifrasComponent } from './lista-cifras/lista-cifras.component';

@NgModule({
  declarations: [
    AppComponent,
    CifraComponent,
    SecaoComponent,
    ListaCifrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
