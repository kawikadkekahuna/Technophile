function Phone(number){
	this.phoneNumber = number;

	this.callPhone = function(number){
		return this.phoneNumber + ' calls ' + number;
	}
}

module.exports = Phone;