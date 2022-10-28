const router = require('express').Router();
const controller = require('./suggest.controller');

router.get("/suggest", controller.suggest);

module.exports = router;