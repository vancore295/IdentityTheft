import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardGeneratorComponent } from './components/card-generator/card-generator.component';
import { EquiivilentCardsComponent } from './components/equiivilent-cards/equiivilent-cards.component';
import { FractionCardComponent } from './components/fraction-card/fraction-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GameComponent } from './components/game/game.component';

// services
import { CardService } from './services/card-service/card.service';

// Routes
import { RoutingModule } from './routing.module';
import { EquivilentFractionCardComponent } from './components/equivilent-fraction-card/equivilent-fraction-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardGeneratorComponent,
    EquiivilentCardsComponent,
    FractionCardComponent,
    PageNotFoundComponent,
    GameComponent,
    EquivilentFractionCardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
