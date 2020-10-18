'use strict';

let express = require('express');
let router = express.Router();

const { listUserService, createUserService, updateUserService, deleteUserService } = require('../../../service/v1/masters/user');
const { passwordGenerator } = require('../../../utility/common');
const { sendEmail } = require('../../../utility/notification/email/email');
const messages = require('../../../utility/message_code.json').curd;

module.exports = {
    listUser,
    createUser,
    updateUser,
    deleteUser
};

function listUser(req, res) {
    console.log("controller")
    let reqParams = req.body;
    listUserService(reqParams)
        .then((response) => {
            const responseReceived = response.length !== 0; // CONDITION FOR ARRAY RESPONSE
            res.status(200);
            res.json({
                status: responseReceived,
                statusCode: responseReceived ? 200 : 404,
                message: responseReceived ? messages.find[200] : messages.find[404],
                data: response,
            })
            //res.send(data)
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
}

function createUser(req, res) {
    console.log(req.project)
    let reqParams = req.body;
 createUserService(reqParams)
        .then((data) => {
            const responseReceived = data.length !== 0;
            res.status(200);
            res.json({
                status: responseReceived,
                statusCode: responseReceived ? 200 : 404,
                message: responseReceived ? messages.find[200] : messages.find[404],
                data: data,
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
}


function updateUser(req, res) {
    let reqParams = req.body;
    updateUserService(reqParams)
        .then((response) => {
            const responseReceived = response; // CONDITION FOR ARRAY RESPONSE

            res.json({
                status: responseReceived,
                statusCode: responseReceived[0] == 1 ? 200 : 404,
                message: responseReceived[0] === 1 ? messages.update[200] : messages.update[404],
                data: response,
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
}

function deleteUser(req, res) {
    let reqParams = req.body;
    deleteUserService(reqParams)
        .then((response) => {
            const responseReceived = response; // CONDITION FOR ARRAY RESPONSE

            res.json({
                status: responseReceived,
                statusCode: responseReceived[0] == 1 ? 200 : 404,
                message: responseReceived[0] === 1 ? messages.delete[200] : messages.delete[404],
                data: response,
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
}
