/**
 * Created by thomasyu on 2/23/16.
 */

var nodemailer = require('nodemailer');

module.exports = {

    sendEmail: function(to, subject, text, callback){
        // GMAIL SMTP
        var transporter = nodemailer.createTransport({
            host: 'smtp.126.com',
            secureConnection: true, // use SSL
            port: 465,
            auth: {
                user: 'thomaspi@126.com',
                pass: '123456THOMAS'
            }
        }, {
            // default values for sendMail method
            from: "ThomasPi <thomaspi@126.com>",
            headers: {
                'My-Awesome-Header': 'Thomas Pi Email Service',
                'From': "ThomasPi <thomaspi@126.com>",
                'Reply-To': to
            }
        });

        transporter.sendMail({
            from: "ThomasPi <thomaspi@126.com>",
            to: to,
            bcc: 'thomas.yu@btcc.com',
            subject: subject,
            text: text
        }, function(err, info){
            if(err){
                console.log(err);
                callback(err);
            }else{
                console.log('Message sent: ' + info.response);
                callback(err, info);
            }
        });

        transporter.close(); // close the pool
    },

    testEmail: function(testMsg){
        module.exports.sendEmail("testEmail", testMsg, 'thomas.yu@btcc.com', function(err){
            if(err) console.log(err);
        });


    }



}
