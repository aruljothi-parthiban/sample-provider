const router = require('express').Router();
const controller = require('./product.controller');

router.get("/product/:id", controller.getById);
router.get("/products", controller.getAll);
router.post("/products", controller.create);
router.get("/:baseSiteId/product/:productCode", controller.getProductByCode);

module.exports = router;