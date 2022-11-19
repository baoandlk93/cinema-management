import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../../service/movie.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';
import {FormControl, Validators} from '@angular/forms';
import {IMovieDetail} from '../../../dto/i-movie-detail';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  url: SafeResourceUrl;
  id: number;

  movie: IMovieDetail;
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private domSanitizer: DomSanitizer,
              private title: Title,
              private router: Router) {
  }

  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit(): void {
    this.title.setTitle('Chi tiết phim');
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.movieService.findById(id).subscribe(value => {
      console.log(value);
      this.movie = value;
      this.url = this.transform(this.movie.trailer);
    });
  }

  goToBookingTicket() {
    this.router.navigateByUrl('ticket/booking-ticket');
  }
}
