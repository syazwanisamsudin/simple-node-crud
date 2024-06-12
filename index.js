const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware to enable to view json from post body in the post response
//If not used, we not able to see the json in post response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

//Old One before simplify into router
//before run, type export PORT=5000

// app.get("/api/products", async (req, res) => {
//   try {
//     const product = await Product.find({});
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/api/products", async (req, res) => {
//   //res.send("Data received");
//   //res.send(req.body);
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndUpdate(id, req.body);

//     if (!product) {
//       res.status(400).json({ message: "Product not found!" });
//     }

//     //Function to Re-check again
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/api/product/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(404).json({ message: "Product not found!" });
//     }

//     res.status(200).json({ message: "Product deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.3xnydv7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connection OK");
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
