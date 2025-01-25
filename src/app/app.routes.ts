import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SurahComponent } from './Components/surah/surah.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'surah/:name/:id',
    component: SurahComponent,
  },
];
