//Example

var json_sanitizer = require('./index.js');

//Fill the json variable with javascript valid JSON
var json = "{ s_id:\"0\",\"t\":[1414696794,1414696788,1414696776,1414696764,1414696752,1414696740,], \"vrms\":[119.589,119.514,119.607,119.641,119.361,119.486],\"irms\":[ 0.366, 0.366, 0.362, 0.364, 0.366, 0.362, ],  \"app\": [ 43.813, 43.785, 43.327, 43.576, 43.729, 43.283, ],  \"core_id\": \"53ff6d065067544847310187\", }";
// var json = '{"result": [{"socket": 10,, "state": 1 },]}';


json_sanitizer(json, function(err, result){
	if (!err) {
		console.log(JSON.parse(result)); //should never throw an error
	} else {
		console.log("ERROR", err);
	}
});