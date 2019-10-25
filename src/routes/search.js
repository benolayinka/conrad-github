const express =  require('express')
const https = require('https')
const rp = require('request-promise')
const router = express.Router()

sendJSONResponse = function(req, res, JSONresponse){
	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(JSONresponse));
}

parseResults = function(searchResults){
	const parsedData = JSON.parse(searchResults);
	var repos = {}
	for (var key in parsedData.items) {
		repos[parsedData.items[key].id] = parsedData.items[key].html_url
	}
	return repos
}

router.get('/:query', (req, res) => {
	var options = {
		url: 'https://api.github.com/search/repositories?q=' + req.params.query,
		headers: {
		'User-Agent': 'conrad-programming-test',
	  	}
	};

	rp(options).then(response => {
		var JSONresponse = parseResults(response)
		sendJSONResponse(req, res, JSONresponse)
	})
})

module.exports = router