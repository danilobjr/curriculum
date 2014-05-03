
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./server/routes'),
    http = require('http'),
    path = require('path'),
    i18n = require('i18n-2');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
// app.use(express.logger('dev'));

app.use(express.cookieParser('averyverysecretphrasenobodywontknowit'));

i18n.expressBind(app, {
  // setup some locales - other locales default to vi silently
  locales: ['en', 'pt-br'],
  // set the default locale
  defaultLocale: 'en',
  // set the cookie name
  cookieName: 'locale'
});

app.use(function(req, res, next) {
  req.i18n.setLocaleFromQuery();
  req.i18n.setLocaleFromCookie();
  next();
});

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/locale/:locale', routes.changeLocale);
app.post('/send-message', routes.sendMessage);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
