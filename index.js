var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var Airtable = require('airtable');
var bodyParser = require('body-parser');

var base = new Airtable({apiKey: 'keyFlAuEUPyJtxN4X'}).base('appTEyGfaH1nbpfH6');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index', {
        inviteRequestSubmitted: false
    });
});

app.post ('/submit_invite_request', function(request, response) {
    base('InvitationRequested').create({
        Names: request.body.names,
        Email: request.body.email
    }, function(err, record) {
        if (err) {
            console.log('error: ', err);
            return;
        }
    });
    response.render('pages/index', {
        inviteRequestSubmitted: true
    });

});

app.get('/event_info', function(request, response) {
    response.render('pages/event_info');
});

app.get('/cool', function(request, response) {
    response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


