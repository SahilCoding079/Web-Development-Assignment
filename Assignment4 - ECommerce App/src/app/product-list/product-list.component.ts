import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private auth: AuthService){ }
  productList: any = [
    {
      prodId:1,
      image: "../assets/Images/product1-img.webp",
      name: "Samsung Galaxy A54 5G",
      price: "Rs. " + 36999,
      description: `The Samsung Galaxy A54 5G is a mid-range smartphone known for its blend of affordability and features. It boasts 5G connectivity, allowing for faster internet speeds. The device typically offers a large, vibrant display ideal for media consumption and gaming. It includes...`,
      qnty:1
    },
    {
      prodId:2,
      image: "../assets/Images/product2-img.webp",
      name: "IPhone 14 Pro Max",
      price: "Rs. " + 189999,
      description: `The iPhone 14 Pro Max is a flagship smartphone from Apple, featuring a large Super Retina XDR display and powered by the latest A-series chip for high performance. It includes advanced camera capabilities with a triple-lens system...`,
      qnty:1
    },
    {
      prodId:3,
      image: "../assets/Images/product3-img.jpg",
      name: "Redmi Note 12 Pro",
      price: "Rs. " + 36999,
      description: `The Redmi Note 12 Pro is a mid-range smartphone from Xiaomi, known for its combination of features and affordability. It typically features a large...`,
      qnty:1
    },
    {
      prodId:4,
      image: "../assets/Images/product4-img.jpg",
      name: "Apple Macbook Pro",
      price: "Rs. " + 139999,
      description: `The Apple MacBook Pro is a line of high-performance laptops designed for professional and power users. Known for its sleek aluminum unibody design, the MacBook Pro offers a combination of powerful hardware and advanced software...`,
      qnty:1
    },
    {
      prodId:5,
      image: "../assets/Images/product5-img.webp",
      name: "Samsung Galaxy A55 5G",
      price: "Rs. " + 45999,
      description: `The smartphone features a 6.5-inch Super AMOLED display with a resolution of 1080 x 2400 pixels, offering vibrant colors, deep blacks, and excellent contrast...`,
      qnty:1
    },
  ];

  inc(prod:any)
  {
    if(prod.qnty != 5)
    {
      prod.qnty += 1;
    }
  }

  dec(prod:any)
  {
    if(prod.qnty != 1)
    {
      prod.qnty -= 1;
    }
  }

  itemsCart:any = [];
  addCart(product:any)
  {
    let cartDataNull = localStorage.getItem('localCart');

    if(cartDataNull == null)
    {
      let storeDataGet:any = [];
      storeDataGet.push(product);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }

    else
    {
      let id = product.prodId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')!);
      for(let i = 0; i<this.itemsCart.length; i++)
      {
        if(parseInt(id) === parseInt(this.itemsCart[i].prodId))
        {
          this.itemsCart[i].qnty = product.qnty;
          index = i;
          break;
        }
      }
      if(index == -1)
      {
        this.itemsCart.push(product);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
      else
      {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartNumberFunc();
  }

  cartNumber:number = 0;
  cartNumberFunc()
  {
    let cartValue = JSON.parse(localStorage.getItem('localCart')!);
    this. cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }   
}
