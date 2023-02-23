import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { IntroComponent } from './components/intro/intro.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {BusinessLogicService} from './services/business-logic.service';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng-lts/dropdown';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    IntroComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [BusinessLogicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
