import {Component, Injectable, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {TicketService} from '../../../service/ticket.service';
import {TokenStorageService} from '../../../service/token-storage.service';
import {AuthService} from '../../../service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {

  username = '';

  constructor(private router: Router,
              private ticketService: TicketService, private tokenService: TokenStorageService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.showUsername();
  }

  showUsername() {
    this.ticketService.showUsername().subscribe(value => {
      console.log(value);
      this.username = value.username;
    });
  }

  whenLogout() {
    this.tokenService.logOut();
    this.username = '';
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: ' Đăng xuất thành công !',
      showConfirmButton: false,
      timer: 1000
    });
    this.router.navigateByUrl('');
    this.reload();
  }

  reload() {
    window.location.reload();
  }
}
