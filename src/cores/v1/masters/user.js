const MODELS = require('../../../models/mysql/index');

const userSchemaModel = MODELS.users;
const ProjectSchemaModel = MODELS.project;
const CustomerSchemaModel = MODELS.customer;
class User {

    create(reqParams) {
        return new Promise((resolve, reject) => {
            // console.log('assasasasasasasasasasa',reqParams.user_name)
            userSchemaModel.create({
                id: reqParams.id,
                image: reqParams.image,
                project: reqParams.project,
                type: reqParams.type,
                unique:reqParams.unique,
                is_active: true,
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // update(reqParams) {
    //     return new Promise((resolve, reject) => {
    //         userSchemaModel.update({
    //             user_name: reqParams.user_name,
    //             contact_no: reqParams.contact_no,
    //             email_id: reqParams.email_id,
    //         }, {
    //             where:
    //             {
    //                 id: reqParams.id,
    //             }
    //         }).then((response) => {
    //             resolve(response);
    //         }).catch((err) => {
    //             reject(err);
    //         });
    //     });
    // }

    findAll() {
        return new Promise((resolve, reject) => {
            userSchemaModel.findAll({where:{is_active:true}}).then((response) => {
                resolve(response);
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
        });
    }

    delete(reqParams) {
        return new Promise((resolve, reject) => {
            userSchemaModel.update({
                is_active: false,
            },
                { where: { id: reqParams.id } })
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports = {
    UserClass: User,
};
