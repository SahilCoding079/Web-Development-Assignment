import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private auth: AuthService){ }

  ngOnInit(): void{
    this.cartDetails();
  }

  getCartDetails:any = [];
  cartDetails()
  {
    if(localStorage.getItem('localCart'))
    {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
    }
  }

  incQnt(prodId:any,qnty:any)
  {
    for(let i = 0; i<this.getCartDetails.length; i++)
    {
      if(this.getCartDetails[i].prodId === prodId)
        if(qnty != 5)
        this.getCartDetails[i].qnty = parseInt(qnty) + 1;
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  }

  decQnt(prodId:any,qnty:any)
  {
    for(let i = 0; i<this.getCartDetails.length; i++)
    {
      if(this.getCartDetails[i].prodId === prodId)
        if(qnty != 1)
        this.getCartDetails[i].qnty = parseInt(qnty) - 1;
    }
    localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
  }

  removeall()
  {
    localStorage.removeItem('localCart');
    this.getCartDetails = [];
    this.cartNumber = 0;
    this.auth.cartSubject.next(this.cartNumber);
  }

  singleDlt(getcartDetail:any)
  {
    console.log(getcartDetail);
    if(localStorage.getItem('localCart'))
    {
      this.getCartDetails = JSON.parse(localStorage.getItem('localCart')!);
      for(let i = 0; i<this.getCartDetails.length; i++)
      {
        if(this.getCartDetails[i].prodId === getcartDetail)
        {
          this.getCartDetails.splice(i, 1);
          localStorage.setItem('localCart', JSON.stringify(this.getCartDetails));
          this.cartNumberFunc();
        }
      }
    }
  }

  cartNumber:number = 0;
  cartNumberFunc()
  {
    let cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this. cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }   

  checkOut()
  {

  }
}
