import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemAvailable = '';
  buttonActivate = false;
  availableFood = [
    {
      imageURL: 'https://nyslice.com/images/Chris-Nonna-Rosa-Pie-Image.jpg',
      name: 'Pizza',
      quantity: 0,
      price: 5.99
    },
    {
      imageURL: 'https://assets.bonappetit.com/photos/5d1cb1880813410008e914fc/16:9/w_1200,c_limit/Print-Summer-Smash-Burger.jpg',
      name: 'Burger',
      quantity: 0,
      price: 2.99
    },
    {
      imageURL: 'http://images.media-allrecipes.com/userphotos/960x960/3757560.jpg',
      name: 'Chicken Pasta',
      quantity: 0,
      price: 4.99
    },
    {
      imageURL: 'https://healthynibblesandbits.com/wp-content/uploads/2019/09/Kimchi-Avocado-Grilled-Cheese-FF.jpg',
      name: 'Grilled Sandwich',
      quantity: 0,
      price: 1.99
    }];

  cart = [];
  cartItemClicked = '';
  removeActivate = false;
  totalAmount = 0;

  selectItem(name) {
    this.itemAvailable = name;
    this.buttonActivate = true;
    this.removeActivate = false;
  }

  selectCartItem(name) {
    this.cartItemClicked = name;
    this.removeActivate = true;
  }

  addItem() {
    if (this.findInCart() === 0) {
      for (const iterator of this.availableFood) {
        if (iterator.name === this.itemAvailable) {
          iterator.quantity = 1;
          this.cart.push(iterator);
          break;
        }
      }
    }
    console.log(this.itemAvailable);


    this.estimateAmount();
  }

  findInCart() {
    for (const iterator of this.cart) {
      if (iterator.name === this.itemAvailable) {
        iterator.quantity += 1;
        return iterator.quantity;
      }
    }

    return 0;
  }

  estimateAmount() {
    for (const iterator of this.cart) {
      this.totalAmount += iterator.price * iterator.quantity;
    }
    this.totalAmount = Math.round(this.totalAmount);
    console.log(this.totalAmount);
  }

  removeItem() {
    for (const iterator of this.cart) {
      if (iterator.name === this.cartItemClicked) {
        if (iterator.quantity === 1) {
          const index = this.cart.indexOf(iterator);
          this.cart.splice(index, 1);
          break;
        } else {
          iterator.quantity -= 1;
        }
      }
    }
  }
}
