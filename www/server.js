var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var os = require('os');


app.use(express.static('views'));
app.use(cookieParser());


app.set('trust proxy', 1) // trust first proxy
app.use(	
	session({
	  secret: 'cookie-test',
	  resave: true,
	  saveUninitialized: true,
	  name:process.env.SERVER_TYPE+'_session',
	  // cookie: { 
	  // 	secure: true 
	  // }
	})
)

app.get('/widget', function(req,res){
	res.render('stylepoints_widget_content.jade', {req: req, publisher_name: app.get('server_type')});
})


app.get('/', function (req, res) {
	switch(app.get('server_type')){
		case 'stylepoints':
			res.render('stylepoints.jade', { req: req, publisher_name: app.get('server_type') });
			break;
		case 'publisher1':
			res.render('publisher1.jade', { req: req, publisher_name: app.get('server_type') });
			break;
		case 'publisher2':
			res.render('publisher2.jade', { req: req, publisher_name: app.get('server_type') });		
			break;
	}
});




app.listen(3000, function () {
	app.set('server_type', process.env.SERVER_TYPE)
	if(app.get("isPublisher")){
		console.log('Publisher app listening on port 3000!');	
	} else {
		console.log('Stylepoints app listening on port 3000!');
	}

});