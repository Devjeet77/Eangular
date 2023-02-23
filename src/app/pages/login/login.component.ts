import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  data = {
    email: '',
    password: '',
  };
  constructor(private register: LoginService, private _snackBar: MatSnackBar) {}

  doSubmit() {
    this.register.loginUser(this.data).subscribe({
      next: (r: any) => {
        console.log(r);
        // window.location.href = '/login-patient';
        this.register.setToken(r.token);
        this._snackBar.open('user Login successfull', 'x');
        window.location.href = '/products';
      },
      error: (e) => {
        console.log(e);
        this._snackBar.open(e.error.errorMessage, 'close');
      },
    });
  }
}
