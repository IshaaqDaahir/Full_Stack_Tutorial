const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// MongoDB
mongoose.connect("mongodb://localhost:27017/swag-shop")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection failed:", err));

// Models
const Product = require("./model/product");
const WishList = require("./model/wishlist");

// Routes
app.post('/product', async (req, res) => {
  try {
    const { title, price } = req.body;
    if (!title || !price) throw new Error("Title and price are required");
    const product = new Product({ title, price });
    const savedProduct = await product.save();
    res.status(200).send(savedProduct);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    res.status(500).send({ error: "Could not fetch products" });
  }
});

app.post('/wishlist', function(request, response) {
    var wishList = new WishList();
    wishList.title = request.body.title;

    if (!wishList.title || !wishList.title === "") {
        response.status(500).send({ error: "Title is required!" }); 
    } else {
        wishList.save()
            .then(newWishList => response.status(200).send(newWishList))
            .catch(err => response.status(500).send({ error: "Could not add product to the wishlist!" }));
    }
});

app.get('/wishlist', async function(request, response) {
    try {
        const wishLists = await WishList.find().populate({path: 'products', model: 'Product'}).exec();
        response.status(200).send(wishLists);
    } catch (err) {
        response.status(500).send({ error: "Could not fetch the wishLists!" });
    }
});

app.put('/wishlist/product/add', async function(request, response) {
    try {
        const product = await Product.findById(request.body.productId);
        if (!product) {
            return response.status(500).send({ error: "Product not found!" });
        }

        const wishlist = await WishList.findById(request.body.wishListId);
        if (!wishlist) {
            return response.status(500).send({ error: "Wishlist not found!" });
        }

        const updateResult = await WishList.updateOne(
            { _id: request.body.wishListId },
            { $addToSet: { products: product._id } }
        );

        if (updateResult.modifiedCount === 0) {
            return response.send("Product was already in the wishlist!");
        }

        response.send("Successfully added to wishlist!");
    } catch (err) {
        response.status(500).send({ error: "Could not add item to wishlist!" });
    }
});

app.listen(3004, function() {
    console.log("Swag Shop API running on port 3004...");
});
