// instead this

// class ShoppingCart {
//     constructor({db}) {
//       this.db = db
//     }
    
//     addProduct (product) {
//       this.db.push(product)
//     }

//     data() {
//         return this.db;
//     }
// }

// const db = [];
// const cart = new ShoppingCart({db});

// cart.addProduct('product');
// console.log(cart.data());

// cart.addProduct = () => console.log('nope!'); 

// cart.addProduct('product'); //this is problem because of mutable

// use this

const makeShoppingCart = ({ db }) => {
    return Object.freeze({
      addProduct,
    })
    function addProduct (product) {
      db.push(product)
    }

    function getProducts () {
        return Object
          .freeze(db)
      }
}

const db = [];

const cart = makeShoppingCart({ db });

//cart.addProduct('product');

cart.addProduct = () => console.log('nope!'); 

cart.addProduct('product');

console.log(db);

