import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListMovieComponent} from './list-movie/list-movie.component';
import {PromotionDetailComponent} from './promotion-detail/promotion-detail.component';
import {MovieDetailComponent} from './movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path: '', component: ListMovieComponent
  },
  {
    path: 'detailPr/:id', component: PromotionDetailComponent
  },
  {
    path: 'detail/:id', component: MovieDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
