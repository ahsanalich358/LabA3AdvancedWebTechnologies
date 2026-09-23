let products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 5999,
    category: "electronics",
    description: "Bluetooth over-ear wireless headphones",
    stock: 25,
    vendor: "Tech Store"
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    price: 7499,
    category: "electronics",
    description: "RGB mechanical keyboard with blue switches",
    stock: 15,
    vendor: "Gadget Hub"
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 8999,
    category: "fashion",
    description: "Lightweight running shoes",
    stock: 30,
    vendor: "Sports World"
  }
];

let nextId = 4;

function getProducts() {
  return products;
}

function getNextId() {
  return nextId++;
}

module.exports = {
  getProducts,
  getNextId
};