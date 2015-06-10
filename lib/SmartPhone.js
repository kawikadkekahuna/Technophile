var Phone = require('./Phone.js');
var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');
var Tablet = require('./Tablet.js');
var phone = new Phone(3333333);
var webBrowser = new WebBrowser();
var tablet = new Tablet();
var gameConsole = new GameConsole('Smart Phone');


function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

function SmartPhone(){
	

	
}

extend(SmartPhone.prototype,phone);
extend(SmartPhone.prototype,webBrowser);
extend(SmartPhone.prototype,gameConsole);
extend(SmartPhone.prototype,tablet);
module.exports = SmartPhone;