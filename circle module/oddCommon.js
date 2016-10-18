var even = require('./evenCommon').even;
module.exports = function(n) {
	console.log(even)
  return n != 0 && even(n - 1);
}
