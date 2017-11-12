var posts = []

var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static("public"))

app.use(bodyParser.text())

app.get("/posts", function(req, res){
	res.send(JSON.stringify(posts))
})

app.post("/post", function(req, res){
	posts.push(req.body)
	res.send("")
})

app.listen(process.env.PORT || 5000, function(){
	console.log('Starting server')
})