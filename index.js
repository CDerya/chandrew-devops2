const express = require("express")
const app = express();

app.get('/', function(req, res) {
	res.send("Hello");
});

app.listen(8080, function (error){
	if(error) {
		console.log(error);
	}
	else{
		console.log("it s started okay")
	}
});
