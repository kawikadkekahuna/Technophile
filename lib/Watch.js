function Watch(){
	
	this.bodyPart = undefined;

	this.wear = function(bodyPart){

		this.bodyPart = bodyPart;
	}
	
}
module.exports = Watch;