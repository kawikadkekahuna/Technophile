var Phone = require('./Phone.js');
var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');
var Tablet = require('./Tablet.js');

function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

extend(SmartPhone.prototype,Phone);
extend(SmartPhone.prototype,WebBrowser);
extend(SmartPhone.prototype,GameConsole);
extend(SmartPhone.prototype,Tablet);

function SmartPhone(number){
	Phone.call(this,number);
	WebBrowser.call(this);
	GameConsole.call(this,'Smart Phone');
	Tablet.call(this);
}

module.exports = SmartPhone;
