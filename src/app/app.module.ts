import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DomandaComponent } from './components/domanda/domanda.component';
import { RispostaComponent } from './components/risposta/risposta.component';
import { PunteggioComponent } from './components/punteggio/punteggio.component';
import { AiutoComponent } from './components/aiuto/aiuto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupsconfittaComponent } from './components/popupsconfitta/popupsconfitta.component';
import { PopupcasaComponent } from './components/popupcasa/popupcasa.component';
import { PopuppubblicoComponent } from './components/popuppubblico/popuppubblico.component';

@NgModule({
  declarations: [
    AppComponent,
    DomandaComponent,
    RispostaComponent,
    PunteggioComponent,
    AiutoComponent,
    PopupsconfittaComponent,
    PopupcasaComponent,
    PopuppubblicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
