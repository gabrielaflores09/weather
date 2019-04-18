import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PaisComponent } from './pais/pais.component';
import { ClimaCapitalComponent } from './clima-capital/clima-capital.component';
import { OpcionesService } from './service/opciones.service';
import { MenuComponent } from './menu/menu.component';
import { routing } from './app.routes';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    ClimaCapitalComponent,
    MenuComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [OpcionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
