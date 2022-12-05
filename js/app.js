class Menu {
    constructor() {
        this.itemsInCart = {
            itemCount: 0,
            subtotal: 0
        }

        //object to hold menu items
        this.menuIventory = {
            item1: {
                id: 1,
                img: './media/ramen1.jpg',
                alt: 'Miso Chasu',
                class: 'ramen-img',
                price: 13.50,
                qty: 0,
                name: 'miso chasu',
            },
            
            item2: {
                id: 2,
                img: './media/ramen2.jpg',
                alt: 'Geki-Kara',
                class: 'ramen-img',
                price: 13.50,
                qty: 0,
                name: 'geki-kara',
            },

            item3: {
                id: 3,
                img: './media/ramen3.jpg',
                alt: 'Kuro',
                class: 'ramen-img',
                price: 15.00,
                qty: 0,
                name: 'kuro',
            },
            
            item4: {
                id: 4,
                img: './media/ramen4.jpg',
                alt: 'Tonkotsu',
                class: 'ramen-img',
                price: 14.50,
                qty: 0,
                name: 'tonkotsu',
            },

            item5: {
                id: 5,
                img: './media/edamame.jpg',
                alt: 'edamame',
                class: 'other-stuff',
                price: 7.00,
                qty: 0,
                name: 'edamame',
            },
            
            item6: {
                id: 6,
                img: './media/porkBuns.jpg',
                alt: 'Porkbuns',
                class: 'other-stuff',
                price: 8.00,
                qty: 0,
                name: 'pork buns',
            },
            
            item7: {
                id: 7,
                img: './media/californiaRoll.jpg',
                alt: 'California Roll',
                class: 'other-stuff',
                price: 6.50,
                qty: 0,
                name: 'california roll',
            },
            
            item8: {
                id: 8,
                img: './media/rainbowRoll.jpg',
                alt: 'Rainbow Roll',
                class: 'other-stuff',
                price: 15.00,
                qty: 0,
                name: 'rainbow roll',
            }
            

        }
    }

    init(){
        this.loadItems();
        this.addToCart();
        this.checkout();
    }

    loadItems(){
        let count = 0;

        let food1 = document.getElementById('food1');
        let food2 = document.getElementById('food2');

        for(const key in this.menuIventory) {
            const item = this.menuIventory[key];
            const product = document.createElement('div');
            product.className = 'col-md-3 product';
            product.innerHTML = `
            <div class="card h-100">
                <img src="${item.img}" class="card-img-top ${item.class}" alt="${item.alt}">
                <div class="card-body">
                    <p class="card-text">${item.name}</p>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-secondary add-button" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
            `;

            if(count < 4){
                food1.append(product);
            } else {
                food2.append(product);
            }
            count++;
        }
    }

    addToCart(){
        //set variables
        let buttons = document.querySelectorAll('.add-button');
        let cartItems = document.getElementById('cartItems');
        let cartSubtotal = document.getElementById('cartSubtotal');
        let itemCount = 0;
        let price = 0;

        for(const key in this.menuIventory){
            const item = this.menuIventory[key];
            //add event listener to each button on each menu item card
            buttons.forEach(button => {
                button.addEventListener('click', ()=> {
                    //if the id of the data attribute matches the item.id
                    if(button.dataset['id'] == item.id){
                        itemCount++;
                        price += item.price;
                        //store the changed item count and price into this.itemInCart
                        this.itemsInCart.itemCount = itemCount;
                        this.itemsInCart.subtotal = price;

                        item.qty++;

                    }
                    //send this updated data to the dom
                    cartItems.innerText = itemCount;
                    cartSubtotal.innerText = price.toFixed(2);
                })
            })
        }
    }

    checkout(){
        let table = document.getElementById('tbody');
        let checkout = document.getElementById('checkout');
        let checkoutPage = document.querySelector('.checkout-page');
        let mainPage = document.querySelector('.main-page');
        let subTimesQty = 0;
        let subotalValue = document.getElementById('subtotalValue');
        let shippingValue = document.getElementById('shippingValue');
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let tax = 0;
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let shipping = 6;

        checkout.addEventListener('click', ()=> {
            if(mainPage.classList.contains('d-none')) return;
            //remove d-none from checkout and add d-none to mainpage
            checkoutPage.classList.remove('d-none');
            mainPage.classList.add('d-none');
        })
    }
}

let action = new Menu();
action.init();