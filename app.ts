(function(){
    interface IProduct{
        id: number;
        title: string;
        imgUrl: string;
        price: number;
    }
    interface ICartItem{
        id: number;
        productId: number;
        quantity: number;
    }

    class Cart{
        private items: Array<ICartItem> = [];
        addToCart(productId: number){

        }
        getCartItems(){

        }
        renderCartBox(){
            const miniCartContainerEl = document.querySelector('.mini-cart');
            miniCartContainerEl.textContent = `You have ${this.items.length} items in your cart`;

        }
    }

    class ProductList{
        private productListContainer: HTMLDivElement;
        constructor(public list: Array<IProduct>){
            this.productListContainer = document.querySelector('.product-list') as HTMLDivElement;
        }
        renderList(): void {
            this.list.forEach((item: IProduct) => {
                const productDivEl: HTMLDivElement = document.createElement('div') as HTMLDivElement;
                productDivEl.className = 'product-item';
                const productTitleEl : HTMLHeadingElement = document.createElement('h3') as HTMLHeadingElement;
                const productImageEl : HTMLImageElement = document.createElement('img') as HTMLImageElement;
                const productPriceEl: HTMLParagraphElement = document.createElement('p') as HTMLParagraphElement;
                const addProductBtnEl : HTMLButtonElement = document.createElement('button') as HTMLButtonElement;

                productTitleEl.textContent = item.title;
                productImageEl.src = item.imgUrl;
                productPriceEl.textContent = item.price.toString();
                addProductBtnEl.textContent = "Add to Cart";

                productDivEl.appendChild(productTitleEl);
                productDivEl.appendChild(productImageEl);
                productDivEl.appendChild(productPriceEl);
                productDivEl.appendChild(addProductBtnEl);

                this.productListContainer.appendChild(productDivEl);
            });
        }
    }

    const products: Array<IProduct> = [
        {
            id: 1,
            title: 'Malabar Biriyani',
            imgUrl: 'https://i.imgur.com/ULHbPTa.jpg',
            price: 100
        },
        {
            id: 2,
            title: 'Pasta',
            imgUrl: 'https://i.imgur.com/r7rQBCS.jpg',
            price: 200
        },
        {
            id: 3,
            title: 'Chicken Fried Rice',
            imgUrl: 'https://i.imgur.com/pYSgtB4.jpg',
            price: 250
        },
        {
            id: 4,
            title: 'Chicken Noodles',
            imgUrl: 'https://i.imgur.com/6VY0ci9.png',
            price: 250
        }
    ];

const productList = new ProductList(products);
const cart = new Cart();
productList.renderList();
cart.renderCartBox();

})();