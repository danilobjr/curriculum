'use strict';

var mandrill = require('mandrill-api/mandrill'),
    mandrill_client = new mandrill.Mandrill('hHIrMfvXpDSowsYwTLpLvQ');

module.exports.sendMessage = function (messageOptions, callback) {
  var async = false;

  mandrill_client.messages.send({
    "message": messageOptions,
    "async": async
  }, function(result) {
    console.log(result);
    callback(null, result);
  }, function(err) {
    // Mandrill returns the error as an object with name and message keys
    console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message); // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
    callback(err);
  });
};

