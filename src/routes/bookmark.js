const express =  require('express')
var router = express.Router()
const models = require('../models')

router.use((req, res, next) => {
 	req.ctx = {
		models,
  	};
  	next();
});

router.get('/', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(Array.from(req.ctx.models.bookmarks)));
});

//api does not validate ids
router.get('/add/:id', (req, res) => {
	req.ctx.models.bookmarks.add(req.params.id)
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(Array.from(req.ctx.models.bookmarks)));
});

router.get('/delete/:id', (req, res) => {
	req.ctx.models.bookmarks.delete(req.params.id)
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(Array.from(req.ctx.models.bookmarks)));
});

module.exports = router