import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaixasComponent } from './Components/caixas/caixas.component';
import { SaqueComponent } from './Components/saque/saque.component';

@NgModule({
  declarations: [
    AppComponent,
    CaixasComponent,
    SaqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
