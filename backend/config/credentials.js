module.exports = function(app, mongoose){
	
	app.set('db', 'mongodb://localhost:27017/silly101');
	mongoose.connect(app.get('db'));

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('db connected');
	});
}