/**
 * Created by thomasyu on 4/6/16.
 */

var email = require('./util/email');

var sys = require('sys');
var exec = require('child_process').exec;

var child;

console.log("start");

var cmd = "ip route get 8.8.8.8 | head -1 | cut -d' ' -f8";
child = exec(cmd, function(err, stdout, stderr){
    console.log(stdout);
    //console.log(stderr);
    var subject = "RaspberryPi IP Renews"
    var msg;
    if(err){
        msg = "Reboot Ip notification Error: " + err + " | " + stderr;
        console.log(msg);
    }else if(stderr) {
        console.log("stderr", stderr);
    }else{
        msg = stdout;
        console.log("√", msg);
        email.sendEmail('thomas.yu@btcc.com', 'Newest Raspberry Pi IP', msg, function(err){
            console.log(err);
        })
    }

})

//
//email.sendEmail('thomas.yu@btcc.com', 'Ip for today', 'this is my ip content', function(err){
//    console.log(err);
//})
