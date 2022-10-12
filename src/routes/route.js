const express = require("express")
const router = express.Router();
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const { authentication, authorization } = require('../middlewares/auth.js');


router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/user/:userId/profile",authentication,userController.getUser)
router.put("/user/:userId/profile",authentication,authorization,userController.updateUser)

router.post("/products",productController.createProduct)
router.get("/products",productController.getProduct)





module.exports = router;