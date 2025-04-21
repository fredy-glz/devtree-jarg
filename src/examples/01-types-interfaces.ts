let producName = "Tablet";
let isAuth = false;
let price = 30;

//* INTERFACE
// interface Product {
//   id: number;
//   price: number;
//   name: string;
// }

//* INTERFACE HERENCIA
// interface FullProduct extends Product {
//   image: string;
// }

//* Lookup
// interface ProductID {
//   id: Product["id"];
// }

//* TYPE
// type Product = {
//   id: number;
//   price: number;
//   name: string;
// };

//* TYPE HERENCIA
// type FullProduct = Product & {
//   image: string;
// };

let product: Product = {
  id: 1,
  price: 30,
  name: "Tablet",
};

let product2: Product = {
  id: 2,
  price: 30,
  name: "Tablet 11 Pulgadas",
};

let product3: ProductID = {
  id: 1,
};

const numbers = [10, 20, 30];

//* UTILITY TYPES
type Product = {
  id: number;
  price: number;
  name: string;
};

type ProductID = Pick<Product, "id">;
type ProductID2 = Omit<Product, "id">;
type ProductID3 = Omit<Product, "id" | "name">;

//* COSAS QUE TIENE INTERFACES Y NO TYPES
// Si se crean dos interfaces con dos nombres, TS las une
interface ProductI {
  id: number;
  price: number;
  name: string;
}
interface ProductI {
  image: string;
}

const productNew: ProductI = {
  id: 1,
  price: 30,
  name: "nombre",
  image: "image.jpg",
};
