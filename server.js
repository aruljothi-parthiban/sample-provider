const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./src/product/product.routes');
const suggestRoutes = require('./src/suggest/suggest.routes');
const authMiddleware = require('./src/middleware/auth.middleware');

const port = 3001;

const init = () => {
    app.use(express.json());
    app.use(cors());
    app.use(productRoutes);
    app.use(suggestRoutes);
    return app.listen(port, () => console.log(`Provider API listening on port ${port}...`));
};

init();
