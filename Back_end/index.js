const express = require("express");
const cors = require("cors");
require("./db/config"); //import condig file
const User = require("./db/User"); //import user file user
const jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

const Product = require("./db/product"); //import file product
const product = require("./db/product");

app = express();

app.use(express.json()); //middule ware to controll data
app.use(cors());

app.post("/register", async (req, resp) => {
  const user = new User(req.body);
  let result = await user.save();
  result = result.toObject(); //password does not send
  delete result.password;
  jwt.sign({ result }, jwtKey, { expiresIn: "2h" }, (err, token) => {
    if (err) {
      resp.send({ result: "no token  user found" });
    }
    resp.send({ result, auth: token });
  });
  // resp.send(result);
});

app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
        if (err) {
          resp.send({ result: "no token  user found" });
        }
        resp.send({ user, auth: token });
      });
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});

app.post("/add-product",verifyToken, async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  resp.send(result);
});

app.get("/products",verifyToken, async (req, resp) => {
  let products = await product.find();
  if (products.length > 0) {
    resp.send(products);
  } else {
    resp.send({ result: "noproduct found" });
  }
});
app.delete("/products/:id",verifyToken, async (req, resp) => {
  const result = await product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

// 1st get id for update product id get
app.get("/product/:id",verifyToken, async (req, resp) => {
  let result = await product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "no data found" });
  }
});
//for update product useing id
app.put("/product/:id",verifyToken, async (req, resp) => {
  let result = await product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  resp.send(result);
});
// use for search id
app.get("/search/:key", verifyToken, async (req, resp) => {
  let result = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
    ],
  });
  resp.send(result);
});

function verifyToken(req, resp, next) {
  let token = req.headers["authorization"];
   if (token) {
     token = token.split(" ")[1];
    console.log("middleware call", token);
    jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        resp.status(401).send({ result: "plz enter valid token" });
      } else {
        next();
      }
    });
  }
  else {
   resp.status(403).send({ result: "plz enter header with token" });
    
 }
}

app.listen(5100, () => {
  console.log("server connected");
});
