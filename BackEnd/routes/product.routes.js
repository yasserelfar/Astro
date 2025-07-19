const router = require("express").Router();
const Product = require('../models/Product.model');
const mongoose = require("mongoose");
const { authMiddleware } = require('../middleware/jwt.middleware');
const { isAdmin, isCustomer } = require('../middleware/guard.middleware.js');

// Get all products in database
router.get('/products', async (req, res, next) => {
    try {
        console.log("hereeeeeeeee 111 ");
        const products = await Product.find();
        const transformedArray = products.map((item) => ({
            id: item._id,
            img: item.image || 'https://static.zara.net/assets/public/021c/20d6/25814622a083/64986afc4fe8/04408474250-p/04408474250-p.jpg?ts=1706111329442&w=824',
            name: item.productName || '',
            price: item.price || 0,
            description: item.description,
            quantity: item.quantity
        }));
        res.json(transformedArray);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get all products." });
    }
});

// Get product by product id 
router.get('/products/:productId', async (req, res, next) => {
    console.log("hereeeeeeeee 222 ");
    let { productId } = req.params;
    productId = productId.toString();
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        res.status(400).json({ message: "product id is not valid" });
        return;
    }

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: `Product with Product ID - ${productId} is not found.` });
        }

        const transformed = {
            id: product._id,
            img: product.image || 'https://static.zara.net/assets/public/021c/20d6/25814622a083/64986afc4fe8/04408474250-p/04408474250-p.jpg?ts=1706111329442&w=824',
            name: product.productName || '',
            price: product.price || 0,
            description: product.description,
            quantity: product.quantity

        };

        res.status(200).json(transformed);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get the product" });
    }
});

// Get products with paging 
router.get('/productspage', async (req, res, next) => {
    try {
        const page = parseInt(req.query._page) || 1;
        const pageSize = 6;

        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const products = await Product.find().skip(startIndex).limit(pageSize);
        const totalProductsCount = await Product.countDocuments();
        const isLastPage = endIndex >= totalProductsCount;

        const transformedArray = products.map((item) => ({
            id: item._id,
            img: item.image || 'https://static.zara.net/assets/public/021c/20d6/25814622a083/64986afc4fe8/04408474250-p/04408474250-p.jpg?ts=1706111329442&w=824',
            name: item.productName || '',
            price: item.price || 0,
            description: item.description
        }));

        res.json(transformedArray);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to get all products." });
    }
});

// Create a new product
router.post('/products', authMiddleware, isAdmin, async (req, res, next) => {
    try {
        console.log("hereeeeeeeee 3333333 ");
        const { productName, price, description, image, quantity } = req.body;

        if (!productName || !price || !description || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const product = await Product.create({ productName, price, description, image, quantity });
        res.status(201).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to create the product" });
    }
});

// Delete a product by ID
router.delete('/products/:productId', authMiddleware, isAdmin, async (req, res, next) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        res.status(400).json({ message: "product id is not valid" });
        return;
    }

    try {
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ message: `Product with Product ID - ${productId} is not found.` });
        }

        res.json({ message: `Product with ${productId} is removed successfully.` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Failed to update the product with productId: ${productId}` });
    }
});

// Update an existing product
router.put('/products/:productId', authMiddleware, isAdmin, async (req, res, next) => {
    try {
        const productId = req.params.productId;
        const { productName, price, description, image, quantity } = req.body;

        if (!productName || !price || !description || !quantity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const existingProduct = await Product.findById(productId);
        if (!existingProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        existingProduct.productName = productName;
        existingProduct.price = price;
        existingProduct.description = description;
        existingProduct.image = image;
        existingProduct.quantity = quantity;

        const updatedProduct = await existingProduct.save();
        res.json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Failed to update product' });
    }
});

module.exports = router;
