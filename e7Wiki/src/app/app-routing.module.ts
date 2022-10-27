import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './epic7/pages/home/home.component';
import { CharactersComponent } from './epic7/pages/characters/characters.component';
import { ApplicationsComponent } from './epic7/pages/applications/applications.component';
import { ArenaComponent } from './epic7/pages/arena/arena.component';

const routes: Routes = [

  {
      path: '',
      component : HomeComponent,
      pathMatch: 'full'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'applications',
    component: ApplicationsComponent
  },
  {
    path: 'arena',
    component: ArenaComponent
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
