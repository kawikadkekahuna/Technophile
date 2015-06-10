function GameConsole(systemName){
	this.systemName = systemName;

	this.play = function(game){
		var msg = this.systemName + ' plays ' + game.title;
		return msg;

	}
}
module.exports = GameConsole;