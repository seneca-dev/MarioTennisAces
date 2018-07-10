import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './characters/characters.component';

@NgModule({
  exports: [
    RouterModule
  ],
})

const routes: Routes = [
  { path: 'characters', component: CharacterComponent }
];

export class AppRoutingModule { }
