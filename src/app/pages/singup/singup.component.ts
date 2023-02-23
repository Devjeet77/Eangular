import { Component } from '@angular/core';
import { SingupService } from 'src/app/service/singup.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent {
  data = {
    address: '',
    email: '',
    name: '',
    password: '',
    phoneNo: '',
  };
  constructor(
    private register: SingupService,
    private _snackBar: MatSnackBar
  ) {}

  doSubmit() {
    this.register.registerUser(this.data).subscribe({
      next: (r) => {
        console.log(r);
        window.location.href = '/login';
        // this._snackBar.open('user Registered successfully', 'x');
      },
      error: (e) => {
        console.log(e);
        this._snackBar.open(e.error.errorMessage, 'close');
      },
    });
  }
}
