import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login:LoginService){}
  ngOnInit(): void {
      if(this.login.isLoggedIn()){
        this.isLoggedIn=true;
      }
  }
  public isLoggedIn=false
  logout(){
    this.login.logout();
    location.reload();
  }
}
