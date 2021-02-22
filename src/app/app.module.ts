import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaixasComponent } from './Components/caixas/caixas.component';
import { SaqueComponent } from './Components/saque/saque.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import {LOCALE_ID} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    CaixasComponent,
    SaqueComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "en-US"
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
