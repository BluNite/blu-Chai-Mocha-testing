//Write code to print all even numbers from 0 to 'num'
// Assume 'num' will be a positive number

var logEvenOnly = function (num) {
	for (var i = 0; i <= num; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
};



logEvenOnly(15);