'use strict';

var i18n = require('i18n-2');

module.exports.index = function(req, res){
  // var viewModel = {
  //   // tab: {
  //   //   title: req.i18n.__('tabTitle')
  //   // },
  //   banner: {
  //     title: req.i18n.__('bannerTitle'),
  //     subtitle: req.i18n.__('bannerSubtitle')
  //   }
  // };
  console.log(req.i18n.getLocale());
  res.render('index', { locale: req.i18n.getLocale() });
};

module.exports.changeLocale = function (req, res){
  // you can set it directly like this
  // req.i18n.setLocale('vi');

  // or set it via the cookie
  console.log(req.params.locale);
  res.cookie('locale', req.params.locale);
  req.i18n.setLocaleFromCookie();

  res.redirect('/');
};

module.exports.sendMessage = function (req, res) {
  console.log(req.body);

  var message = '';

  if (req.i18n.getLocale() === 'en') {
    message = 'Done. I\'ll reply you soon.';
  } else {
    message = 'Mensagem enviada. Aguarde, responderei em breve.';
  }

  res.json({ success: true, message: message });
};
