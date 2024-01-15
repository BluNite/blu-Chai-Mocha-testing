var expect = chai.expect;
// before()
before(function () {
	// set window temp to {}
	window._temp = {};
	// will log temp log to console
	window._temp.log = console.log;
	// logs window args
	window.console.log = (function (...args) {
		// var 'values' set to empty array
		var values = [];
		// var log is a func() push args to []
		var log = function (args) {
			values.push(args);
			// 
			window._temp.log(args);

		};
		// call 'log' func() returns 'values
		log.calledWith = function () {
			return values;
		};
		// return here
		return log;
	})();
});


// describe() countdown 
describe("countdown", function () {
	// it() algo should log from 'num' down to 1
	it("should log numbers from `num` down to 1", function () {
		// func() tests algo set 'num' to 15
		var num = 15;
		//pass 'num' to countdown
		countdown(num);
		// expect() log to console to. eql() array 15-1
		expect(console.log.calledWith()).to.eql([
			15,
			14,
			13,
			12,
			11,
			10,
			9,
			8,
			7,
			6,
			5,
			4,
			3,
			2,
			1
		]);
	});
});

// after()
after(function () {
	// window temp log to console
	console.log = window._temp.log;
	// clears temp window
	delete window._temp;
});