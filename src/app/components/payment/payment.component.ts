import { Component,OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './../../service/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private login:LoginService,private _snackBar: MatSnackBar,private cart:CartService){}
  address=''
  product:{
    cartId:number,
    category:string,
    details:string
    image:string
    name : string
    price:number
    prodId:number
    rating:string
    stock:number}[]=[]
  j:number=0;
  totalPrice=0;
  ngOnInit(): void {
    this.login.getEmail().subscribe(
      {
        next:(r:any)=>{
          this.login.getAccountByEmail(r.email).subscribe(
            {
              next:(a:any)=>{
                this.address=a.address;
                this.cart.getCart().subscribe(
                  {
                    next:(b:any)=>{
                      for(let i of b){
                        if(i.account.email==a.email){

                          for(let k of i.product){
                            this.product.push(k);
                            this.totalPrice=this.totalPrice+k.price;

                          }
                          this.product[this.j].cartId=i.cartId;
                          this.j++;
                        }
                      }

                      console.log(this.product)
                      // if(this.product.length!=0){
                      //   this.isFilled=true
                      // }
                    },
                    error:(e)=>{
                      console.log(e);
                    this._snackBar.open(e.error.errorMessage, 'close');
                    }
                  }
                )
              },
              error:(e)=>{
                this._snackBar.open("Some error occured", 'close');
                console.log(e);
              }
            }
          )
        }
      }
    )
  }
  sleep = (ms:any) => new Promise(r => setTimeout(r, ms));
  placeOrder=async()=>{
    this._snackBar.open("Your Order is Placed", 'close');
    await this.sleep(2000);
    window.location.href="/"
  }

}
