var testCase = require('nodeunit').testCase;
var exec = require('child_process').exec;
var colors = require('colors');
var diff = require('diff');
var fs = require('fs');

Error.prepareStackTrace = function(error, stack) {
    var d = error.message;
    var ret = "";
    d.forEach(function(part) {
        var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
	ret += part.value[color];
    });
    return ret;
};

exports.getTestCase = function(name, execCmd, diffFile) {
    return ({
	name: function(test) {
            exec(execCmd, function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile(diffFile, function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
				var d;
				if (stdout != "")
                                    d = diff.diffLines(stdout, data.toString());
				else
				    d = diff.diffLines("Your binany doesn't compile ! Check compilation stack below for more informations.\n", stdout);
				test.ok(false, d);
                            } else {
				test.ok(true);
			    }
                        }
                        test.done();
                    });
                }
            });
        }
    });
}