import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from './components/game/game.component';
import {IntroComponent} from './components/intro/intro.component';

const routes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: '', pathMatch: 'full' } // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
