import { Component } from '@angular/core';
import { ProductService } from './../../service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './../../service/cart.service';
import { LoginService } from './../../service/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private product:ProductService,private _snackBar: MatSnackBar, private cart:CartService, private login:LoginService){}
  search=''
  products:{category:string,
    details:string
    image:string
    name : string
    price:number
    prodId:number
    rating:string
    stock:number}[]=[]
    dataProduct:{category:string,
      details:string
      image:string
      name : string
      price:number
      prodId:number
      rating:string
      stock:number}[]=[]
    data={product:this.dataProduct,account:{}}
  doSubmit(){
    this.products.length=0;
    this.product.searchProduct(this.search).subscribe(
      {
        next:(r:any)=>{
          for(let i of r){
            this.products.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
      this._snackBar.open("Some Error Occured, Please try again...", 'close');
        }
      }
    )
  }
  addToCart(item:any){
    this.data.product.length=0;
    this.data.product.push(item)
    this.login.getEmail().subscribe(
      {
        next:(r:any)=>{
          this.login.getAccountByEmail(r.email).subscribe(
            {
              next:(r:any)=>{
                this.data.account=r;
              },
              error:(e)=>{
                console.log(e);
               this._snackBar.open("Error Occured with login", 'close');
              }
            }
          )
        },
        error:(e)=>{
          console.log(e);
         this._snackBar.open("Error Occured with login", 'close');
        }
      }
    )
    console.log(this.data);
    this.cart.addCart(this.data).subscribe(
      {
        next:(r:any)=>{
          this._snackBar.open("Product added to cart", 'x');
        },
        error:(e)=>{
          console.log(e);
          // this._snackBar.open("Some Error Occured, Try Adding Again", 'close');
        }
      }
    )
  }
}

