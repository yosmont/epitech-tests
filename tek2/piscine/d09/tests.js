var testCase = require('nodeunit').testCase;
var exec = require('child_process').exec;
var colors = require('colors');
var diff = require('diff');
var fs = require('fs');

module.exports = testCase({
    'ex-1': testCase({
        'Cthulhu': function(test) {
            exec("/tmp/epitech-tests/test-1 | cat -e", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex-1/outputs/out1", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    }),
    'ex00': testCase({
        'Character': function(test) {
            exec("/tmp/epitech-tests/test00", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex00/outputs/out1", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    }),
    'ex01': testCase({
        'Warrior': function(test) {
            exec("/tmp/epitech-tests/test01", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex01/outputs/out1", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    }),
    'ex02': testCase({
        'Mage and Priest': function(test) {
            exec("/tmp/epitech-tests/test02", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex02/outputs/out1", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    }),
    'ex03': testCase({
        'Paladin': function(test) {
            exec("/tmp/epitech-tests/test03", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex03/outputs/out", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    }),
    'ex04': testCase({
        'Hunter': function(test) {
            exec("/tmp/epitech-tests/test04", function(err, stdout, stderr) {
                if (err) {
                    test.ok(false);
                    test.done();
                } else {
                    fs.readFile("/tmp/epitech-tests/ex04/outputs/out", function(err, data) {
                        if (err) {
                            test.ok(false);
                        } else {
                            if (data.toString() != stdout) {
                                var d = diff.diffLines(stdout, data.toString());
                                d.forEach(function(part) {
                                    var color = part.added ? 'green' : part.removed ? 'red' : 'grey';
                                    process.stderr.write(part.value[color]);
                                });
                            }
                            test.equal(stdout, data.toString());
                        }
                        test.done();
                    });
                }
            });
        }
    })
});
