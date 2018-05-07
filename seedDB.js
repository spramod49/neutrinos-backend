const mongoose = require("mongoose");
const Product = require("./models/products");
mongoose.connect("mongodb://localhost/neutrinos");

let data = [
  {
    _id: "5af0264a129d203e18a3fac1",
    name: "You dont know JS",
    image: "../../assets/images/you_dont_know_js.jpg",
    price: 300,
    addedToCart: false,
    __v: 0
  },
  {
    _id: "5af0264a129d203e18a3fac2",
    name: "One piece",
    image: "../../assets/images/one_piece.jpg",
    price: 2000,
    addedToCart: false,
    __v: 0
  },
  {
    _id: "5af0264a129d203e18a3fac3",
    name: "G.O.T",
    image: "../../assets/images/got.jpg",
    price: 1000,
    addedToCart: false,
    __v: 0
  },
  {
    _id: "5af0264a129d203e18a3fac4",
    name: "Harry Potter",
    image: "../../assets/images/hp.jpg",
    price: 800,
    addedToCart: false,
    __v: 0
  },
  {
    _id: "5af0264a129d203e18a3fac5",
    name: "Marvel Comics",
    image: "../../assets/images/marvel.jpg",
    price: 1800,
    addedToCart: false,
    __v: 0
  },
  {
    _id: "5af0264a129d203e18a3fac6",
    name: "DC Comics",
    image: "../../assets/images/dc.jpg",
    price: 1200,
    addedToCart: false,
    __v: 0
  }
];

Product.insertMany(data)
  .then(docs => {
    console.log("Database populated");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
