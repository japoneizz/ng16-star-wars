import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent, ImageComponent } from 'ono-ui';

import { HomeRoutingModule } from '@features/home/home-routing.module';
import { HomeContainerComponent } from '@features/home/components/home-container/home-container.component';
import { HomeMoviesComponent } from '@features/home/components/home-movies/home-movies.component';
import { HomeHeaderComponent } from '@features/home/components/home-header/home-header.component';
import { HomeMovieDetailComponent } from './components/home-movie-detail/home-movie-detail.component';
import { HomeMovieCharacterComponent } from './components/home-movie-character/home-movie-character.component';

@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeMoviesComponent,
    HomeHeaderComponent,
    HomeMovieDetailComponent,
    HomeMovieCharacterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    CardComponent,
    ImageComponent,
  ],
})
export class HomeModule {}
