var config = require('./config.js');
var wolfram = require('wolfram').createClient("");
var irc = require('irc');

var client = new irc.Client('irc.freenode.org', 'WolfBot', {
    channels: ['#korea'],
});

client.addListener('message', function (from, to, message) {
    console.log(from + ' => ' + to + ': ' + message);
});

