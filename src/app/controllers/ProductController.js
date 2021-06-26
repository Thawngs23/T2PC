const { mongooseToObject } = require('../../tools/mongoose');
const Product = require('../models/Product');



class ProductController {
    showAll(req,res,next)
    {
        Product.find({})
            .then((products) => {
                res.render('product/show-all', { products: mongooseToObject(products) });
            })
            .catch(next);
    }
}

module.exports = new ProductController();
