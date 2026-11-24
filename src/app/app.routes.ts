import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'MeerCAD – SceneEditor and CAD libraries for three.js' },
  { path: '**', redirectTo: '' },
];
