'use strict';

var i18n = require('i18n-2'),
    email = require('./../services/email');

module.exports.index = function(req, res){
  res.render('index', { locale: req.i18n.getLocale() });
};

module.exports.changeLocale = function (req, res){
  res.cookie('locale', req.params.locale);
  req.i18n.setLocaleFromCookie();

  res.redirect('/');
};

module.exports.sendMessage = function (req, res) {
  var successMessage = '',
      errorMessage = '';

  if (req.i18n.getLocale() === 'en') {
    successMessage = 'Done. I\'ll reply you soon.';
    errorMessage = 'Oops. There was an error. Try later.';
  } else {
    successMessage = 'Mensagem enviada. Aguarde, responderei em breve.';
    errorMessage = 'Oops. Ocorreu um erro. Tente mais tarde.';
  }

  var message = {
    to: [{email: 'danilobjr@gmail.com', name: 'Danilo Jr.'}],
    from_name: req.body.name,
    from_email: req.body.email,
    subject: "danilojunior.com - contact",
    html: req.body.message + '<br><br><b>' + req.body.name + '</b><br>' + req.body.email
  };

  email.sendMessage(message, function (err, response) {
    if (err) {
      console.log(JSON.stringify(error));
      res.json({ success: false, message: errorMessage });
    } else {
      res.json({ success: true, message: successMessage });
    }
  });
};
