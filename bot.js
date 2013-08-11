var config = require('./config.js');
console.log(config);
var wolfram = require('wolfram').createClient(config.wolfkey);
var irc = require('irc');

var client = new irc.Client('irc.freenode.org', 'WolfBot', {
    channels: ['#korea'],
});

client.addListener('message', function (from, to, message) {
  if(message.indexOf("!wolf") == 0)
  {
    wolfram.query(message.substr(6),
      function(err, result)
      {
        var msg = "";

        if(err || result.length < 2 || result[1].subpods.length < 1)
          msg = "error";
        else
          msg = result[1].subpods[0].value;

        client.say('#korea', from + ": " + msg);
      }
    );
  }
});

