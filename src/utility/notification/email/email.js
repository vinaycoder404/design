var nodemailer = require("nodemailer");
const { newUserTemplate, forgotPasswordTemplate, createTicketTemplate, createCommentTemplate, cronTemplate } = require('./template');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'toolticket52@gmail.com',
        pass: 'tickett00L'
    }
});

module.exports = { sendEmail };

function sendEmail(emailTo, templateId, templateBody) {

    return new Promise((resolve, reject) => {
        let htmlBody = '';
        let subjectBody = '';
        if (templateId == "newUser") {
            htmlBody = newUserTemplate(templateBody);
            subjectBody = "Ticketing Tool Login Details";
        }
        else if (templateId == "forgotPassword") {
            htmlBody = forgotPasswordTemplate(templateBody);
            subjectBody = "Password Reset Email";
        }
        else if (templateId == "createTicket") {
            // console.log(templateBody)
            htmlBody = createTicketTemplate(templateBody);
            subjectBody = "Ticket created";
        }
        else if (templateId == "createComment") {
            // console.log(emailTo)
            htmlBody = createCommentTemplate(templateBody);
            subjectBody = "Comment added";
        }
        else if (templateId == "cronJobs") {
            htmlBody = cronTemplate(templateBody);
            subjectBody = "Cron Job";
        }

        var mailOptions = {
            from: 'toolticket52@gmail.com',
            to: emailTo,
            subject: subjectBody,
            html: htmlBody
        };

        // console.log(JSON.stringify(mailOptions))

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject();
            } else {
                try {
                    console.log('Email sent: ' + info.response);
                    // console.log("Password : " + password);
                    resolve(info);
                } catch (error) {
                    console.log('ERROR', error);
                }
            }
        })

    })
}


