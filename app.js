var browser = require('airplay2').createBrowser(0);
var port = +process.argv[2] || 8888;
var file = process.argv[3]|| '';
var device2 = 0;
console.log(file);
var url = 'http://192.168.1.21:'+ port +'/' + file;
console.log(url);
browser.on('deviceOn', function(device) {
    device.play(url, 0);


});
browser.start();
