import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeContainerComponent } from '@features/home/components/home-container/home-container.component';
import { HomeMoviesComponent } from '@features/home/components/home-movies/home-movies.component';
import { HomeMovieDetailComponent } from '@features/home/components/home-movie-detail/home-movie-detail.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeContainerComponent,
    children: [
      {
        path: '',
        component: HomeMoviesComponent,
      },
      {
        path: 'detail/:id/:name',
        component: HomeMovieDetailComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
