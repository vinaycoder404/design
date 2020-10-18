const model = require('../../src/models/mysql/index');

module.exports = {
    bootstrap: () => {
        model.connection.sync().then(() => {
            console.log('MYSQL BOOTSTRAP :: SUCCESS');
        }).catch((error) => {
            console.error("Error connecting to database ::" + error);
        });
    },
};