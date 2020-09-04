import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { FooterComponent } from './parts/footer/footer.component';
import { SobreComponent } from './pages/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatosComponent,
    NavbarComponent,
    FooterComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
