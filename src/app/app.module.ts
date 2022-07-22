import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersComponentComponent } from './components/characters-component/characters-component.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';

import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponentComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
