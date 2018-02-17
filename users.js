 const mail = require('nodemailer');
 var path = require('path');

module.exports = (router) => { 
    router.post('/', function(req, res) {
        console.log('req.body:', req.body)
        var transporter = mail.createTransport({
            service: 'gmail',
            auth: {
                user: 'sportslead2play@gmail.com',
                pass: 'lead2play'
            }
        });
 
        let mailOptions = {
            from: req.body.email, // list of receivers
            to: 'sportslead2play@gmail.com', // sender address 
            subject: req.body.name, // Subject line 
            html: '<p>Email :'+req.body.email+',</n>LastName:'+req.body.lastname+',</n>Phone no:'+req.body.number+'</n>,Message:'+req.body.msg+'</p>'
        };

        transporter.sendMail(mailOptions, function(error, info) { 
              // if(error) {
              //   console.log("error",error)
              // } else {
              //   console.log("success",info)
              // }
                
        });
    })
    return router;
}