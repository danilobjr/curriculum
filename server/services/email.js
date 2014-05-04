'use strict';

var mandrill = require('mandrill-api/mandrill'),
    mandrillClient = new mandrill.Mandrill('hHIrMfvXpDSowsYwTLpLvQ');

module.exports.sendMessage = function (messageOptions, callback) {
  var message = {
    to: messageOptions.to,
    from_name: messageOptions.fromName,
    from_email: messageOptions.fromEmail,
    subject: messageOptions.subject,
    html: messageOptions.html
  };

  var async = false;

  mandrillClient.messages.send({
    'message': message,
    'async': async
  }, function(result) {
    if (result[0].status === 'rejected') {
      return callback(new Error(result[0].reject_reason));
    }

    callback(null, result);
    // console.log(result);
  }, function(err) {
    callback(err);
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + err.name + ' - ' + err.message); // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
  });
};

