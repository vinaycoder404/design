'use strict';
const messages = require('../../utility/message_code.json').curd;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const { listCronTicketsService } = require('../../service/v1/cron/cron');
const { listPriorityService } = require('../../service/v1/masters/priority');
const { listUserService } = require('../../service/v1/masters/user');
const { sendEmail } = require('../notification/email/email');
module.exports = {
    listCronTickets
};

function listCronTickets(req, res) {
    console.log('controller');
  
 listCronTicketsService()
        .then((data) => {
            listUserService().then((response) => {
                // console.log(JSON.stringify(response))
                let user = JSON.stringify(response);
                let userrole = JSON.parse(user)
                userrole.map((e) => {
                    //  console.log(e.role_id)
                    if (e.role_id == 1) {
                        sendEmail(e.email_id, 'cronJobs', data);
                    }
                })
            
            })
        })
        .catch((ex) => {
            res.status(500);
                res.json({
                    status: false,
                    statusCode: 500,
                    message: messages[500],
                });
            //console.log(ex)
        })

//  listPriorityService()
//         .then((data) => {
//             const responseReceived = data.length !== 0;
//             res.status(200);
//             res.json({
//                 status: responseReceived,
//                 statusCode: responseReceived ? 200 : 404,
//                 message: responseReceived ? messages.find[200] : messages.find[404],
//                 data: data,
//             });
//         })
//         .catch((ex) => {
//             res.status(500);
//                 res.json({
//                     status: false,
//                     statusCode: 500,
//                     message: messages[500],
//                 });
//             //console.log(ex)
//         })
    
}


