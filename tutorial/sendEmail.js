let nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'okoyejj@gmail.com',
        pass: '.1950.Ifeyinwa.1982.'
    }
});

let mailOptions = {
    from: 'LizetteForkwa@gmail.com',
    to: 'LizetteForkwa@gmail.com',
    subject: 'Immediate Attention!!!',
    text: 'We are sorry to inform you that Okoye Bilikha has been ...'
};

let range = (start, end) => {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}

let value = range(1, 100);

// value.forEach(element=>{
//     transporter.sendMail(mailOptions, (err, info)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Email Sent:", info.response);
//         }
//     });
// });

transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Email Sent:", info.response);
    }
});
