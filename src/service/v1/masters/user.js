const userCore = require('../../../cores/v1/masters/user');
const userObj = new userCore.UserClass();

// module.exports = {
//     listPriorityService, managePriorityService, deletePriorityService
// };

module.exports = {
    listUserService,createUserService,updateUserService,deleteUserService
};

function listUserService() {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        userObj.findAll()
            .then((response) => {
                resolve(response);
            }).catch((err) => {
            reject(err);
        });
    });
}

function createUserService(reqParams) {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        userObj.create(reqParams)
            .then((response) => {
                resolve(response);
            }).catch((err) => {
            reject(err);
        });
    });
}

function updateUserService(reqParams) {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        userObj.update(reqParams)
        .then((response) => {
            resolve(response);
        }).catch((err) => {
        reject(err);
    });

    });
}

function deleteUserService(reqParams) {
    return new Promise((resolve, reject) => {
        // CALL CORE FUNCTIONS HERE & BASED ON OUTPUT RETURN DATA TO CONTROLLER
        userObj.delete(reqParams)
        .then((response) => {
            resolve(response);
        }).catch((err) => {
        reject(err);
    });

    });
}

// function managePriorityService(reqParams) {
//     return new Promise((resolve, reject) => {
//         if (reqParams.id === 0) {
//             // IF ID EQUALS TO 0 CREATE NEW PRIORITY
//             priorityObj.create(reqParams)
//                 .then((response) => {
//                     resolve(response);
//                 })
//                 .catch((ex) => {
//                     reject(ex);
//                 })
//         } else {
//             // ELSE UPDATE OLD PRIORITY
//             priorityObj.update(reqParams)
//                 .then((response) => {
//                     resolve(response);
//                 })
//                 .catch((ex) => {
//                     reject(ex);
//                 })
//         }
//     })
// }

// function deletePriorityService(params) {
//     return new Promise((resolve, reject) => {
//         priorityObj.delete()
//             .then((response) => {
//                 resolve(response);
//             })

//     })
// }