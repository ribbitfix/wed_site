var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var bodyParser = require('body-parser');
var base = require('airtable').base('appTEyGfaH1nbpfH6');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/scripts', express.static(__dirname + '/node_modules/bootstrap-material-design/dist'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('pages/index', {
        inviteRequestSubmitted: false,
        submissionFailed: false
    });
});

app.post('/submit_invite_request', function(request, response) {
    base('InvitationRequested').create({
        Names: request.body.names,
        Email: request.body.email
    }, function(err, record) {
        if (err) {
            console.log('error: ', err);
            response.render('pages/index', {
                inviteRequestSubmitted: false,
                submissionFailed: true
            });
        } else {
            response.render('pages/index', {
                inviteRequestSubmitted: true,
                submissionFailed: false
            });
        }
    });
});

app.post('/submit_yes_rsvp', function(request, response) {
    base('YesRSVP').create({
        NumberOfGuests: parseInt(request.body.NumberOfGuests, 10),
        Guest1: request.body.guest1,
        Guest2: request.body.guest2,
        Guest3: request.body.guest3,
        Guest4: request.body.guest4,
        Guest5: request.body.guest5,
        Guest6: request.body.guest6,
        Guest7: request.body.guest7,
        Guest8: request.body.guest8,
        StayingAtCS: request.body.StayingAtCS,
        LodgingPreferences: request.body.LodgingPreferences,
        DietInfo: request.body.DietInfo,
        SongRequests: request.body.SongRequests
    }, function(err, record) {
        if (err) {
            console.log('error: ', err);
        }
    });
});

app.get('/rsvp_day', function(request, response) {
    response.render('pages/invitation', {
        isDayGuest: true
    });
});

app.get('/rsvp_overnight', function(request, response) {
    response.render('pages/invitation', {
        isDayGuest: false
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


