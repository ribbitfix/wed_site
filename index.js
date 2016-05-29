var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');

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

app.get('/submit_invite_request', function(request, response) {
    // TODO:
    // - submit data to airtable
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


