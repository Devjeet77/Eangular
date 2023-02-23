import { Component,OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  constructor(private cart:CartService,private _snackBar: MatSnackBar,private login:LoginService){}

  isFilled=false;
  products:{cartId:number,account:{userId:number, name:string, email:string, phoneNo:number, address: string, password:string},product:{category:string,
    details:string
    image:string
    name : string
    price:number
    prodId:number
    rating:string
    stock:number}[]}[]=[]
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
                      if(this.product.length!=0){
                        this.isFilled=true
                      }
                    },
                    error:(e)=>{
                      console.log(e);
                    this._snackBar.open(e.error.errorMessage, 'close');
                    }
                  }
                )
              },
              error:(e)=>{
                console.log(e);
               this._snackBar.open(e.error.errorMessage, 'close');
              }
            }
          )
        },
        error:(e)=>{
          console.log(e);
         this._snackBar.open(e.error.errorMessage, 'close');
        }
      }
    )


  }

  deleteItem(item:any){
    this.cart.deleteCart(item).subscribe(
      {
        next:(r:any)=>{
          location.reload()
        },
        error:(e)=>{
          console.log(e);
         this._snackBar.open(e.error.errorMessage, 'close');
        }
      }
    )
  }

}
