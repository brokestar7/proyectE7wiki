import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ArenaComponent } from './pages/arena/arena.component';



@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    ApplicationsComponent,
    ArenaComponent
  ],
  exports: [
    HomeComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class Epic7Module { }
