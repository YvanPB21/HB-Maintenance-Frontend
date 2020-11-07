import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

class AuthService {
}

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  constructor(private router: Router, public authService: AuthService) { }
  goToProfile(): void {
// TODO::add decoded token
  }
}
