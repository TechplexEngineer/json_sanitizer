var Sandbox = require('sandbox');

module.exports = exports = function(json, callback) {
	// run the code in a sandbox to thwart evil people
	var s = new Sandbox();

	// in a self executing function set json equal to a variable and stringify the result
	json = "(function() { var j ="+json+"; return JSON.stringify(j); })()";

	s.run(json, function(output) {

		//chop off the extra quotes
		var out = output.result;
		out = out.substring(1, out.length-1);

		if (output.result[1] == '{') {
			callback(null, out)
		} else {
			callback(out, null)
		}

	});
}