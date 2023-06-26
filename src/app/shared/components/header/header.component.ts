import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/modules/common/service/jwt.service';
import { LoginComponent } from 'src/app/modules/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title = "MyFitnessApp";
  isLoggedIn = false;

  constructor(
    private jwtService: JwtService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.isLoggedIn = this.jwtService.isLoggedIn();
    }
  
    logout() {
      this.jwtService.removeToken();
      this.router.navigate(['/login']);
    }

}
