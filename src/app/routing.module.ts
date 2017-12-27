import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CardGeneratorComponent } from './components/card-generator/card-generator.component';
import { EquiivilentCardsComponent } from './components/equiivilent-cards/equiivilent-cards.component';
import { FractionCardComponent } from './components/fraction-card/fraction-card.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GameComponent } from './components/game/game.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, data: {} },
    { path: 'game', component: GameComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { enableTracing: false }) ],
    exports: [ RouterModule ]
  })

  export class RoutingModule {}
