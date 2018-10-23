const request = require('request');

exports.handler = function(event, context, callback) {
  console.log('Received event:', JSON.stringify(event, null, 2));

  callback(null, {
  statusCode: 200,
  body: "commande crée"
  });

   //Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
   var body = 'cmd=_notify-validate&' + event.body;

   console.log('Verifying');
   console.log(body);

   var options = {
       url: 'https://lpa2sgadot.herokuapp.com/order',
       method: 'POST',
       headers: {
           'Connection': 'close',
           'accept': 'application/json', 
           'Content-Type': 'application/json'
       },
       body: "{ \"client_name\": \"robert Dupond\", \"client_adress\": \"3 rue des alouettes Trifouilly les oies\", \"pizzas\": [ 0 ]}",
       strictSSL: true,
       rejectUnauthorized: false,
       requestCert: true,
       agent: false
    };

  }