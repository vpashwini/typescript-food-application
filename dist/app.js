(function () {
    var Cart = /** @class */ (function () {
        function Cart() {
            this.items = [];
        }
        Cart.prototype.addToCart = function (productId) {
        };
        Cart.prototype.getCartItems = function () {
        };
        Cart.prototype.renderCartBox = function () {
            var miniCartContainerEl = document.querySelector('.mini-cart');
            miniCartContainerEl.textContent = "You have " + this.items.length + " items in your cart";
        };
        return Cart;
    }());
    var ProductList = /** @class */ (function () {
        function ProductList(list) {
            this.list = list;
            this.productListContainer = document.querySelector('.product-list');
        }
        ProductList.prototype.renderList = function () {
            var _this = this;
            this.list.forEach(function (item) {
                var productDivEl = document.createElement('div');
                productDivEl.className = 'product-item';
                var productTitleEl = document.createElement('h3');
                var productImageEl = document.createElement('img');
                var productPriceEl = document.createElement('p');
                var addProductBtnEl = document.createElement('button');
                productTitleEl.textContent = item.title;
                productImageEl.src = item.imgUrl;
                productPriceEl.textContent = item.price.toString();
                addProductBtnEl.textContent = "Add to Cart";
                productDivEl.appendChild(productTitleEl);
                productDivEl.appendChild(productImageEl);
                productDivEl.appendChild(productPriceEl);
                productDivEl.appendChild(addProductBtnEl);
                _this.productListContainer.appendChild(productDivEl);
            });
        };
        return ProductList;
    }());
    var products = [
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
    var productList = new ProductList(products);
    var cart = new Cart();
    productList.renderList();
    cart.renderCartBox();
})();
