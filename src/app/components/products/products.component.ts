import { Component , OnInit} from '@angular/core';
import { ProductService } from './../../service/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from './../../service/cart.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit{

  constructor(private product:ProductService,private _snackBar: MatSnackBar, private cart:CartService, private login:LoginService){}
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

  ngOnInit(): void {
      this.product.getProducts().subscribe(
        {
          next:(r:any)=>{
            console.log(r)
            for(let i of r){
              this.products.push(i)
            }
          },
          error:(e)=>{
            console.log(e);
        this._snackBar.open(e.error.errorMessage, 'close');
          }
        }
      )
  }
  all(){
    location.reload()
  }
  electronics(){
    this.products.length=0
    this.product.getProducts().subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            if(i.category=="electronics")
            this.products.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
      this._snackBar.open(e.error.errorMessage, 'close');
        }
      }
    )
  }

  fashion(){
    this.products.length=0
    this.product.getProducts().subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            if(i.category=="fashion")
            this.products.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
      this._snackBar.open(e.error.errorMessage, 'close');
        }
      }
    )
  }
  mobiles(){
    this.products.length=0
    this.product.getProducts().subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            if(i.category=="mobiles")
            this.products.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
      this._snackBar.open(e.error.errorMessage, 'close');
        }
      }
    )
  }
  home(){
    this.products.length=0
    this.product.getProducts().subscribe(
      {
        next:(r:any)=>{
          console.log(r)
          for(let i of r){
            if(i.category=="home")
            this.products.push(i)
          }
        },
        error:(e)=>{
          console.log(e);
      this._snackBar.open(e.error.errorMessage, 'close');
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
               this._snackBar.open("login error", 'close');
              }
            }
          )
        },
        error:(e)=>{
          console.log(e);
         this._snackBar.open("login error", 'close');
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
