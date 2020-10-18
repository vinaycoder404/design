
const SFTP_PROMISE = require('sftp-promises');
const SFTP_CONFIG = require('../../config/sftp_config.json');

function SFTP(params) {
    const DATA_LAKE_SFTP_CONFIG = SFTP_CONFIG.finnone_user;
    const sftpObj = new SFTP_PROMISE(DATA_LAKE_SFTP_CONFIG);
    const local_storage_path = `./upload/${file_name_dat}`;
    const remote_storage_path = DATA_LAKE_DIR_UAT + file_name_dat;
    sftpObj.put(params.local_storage_path, params.remote_storage_path)
    .then((sftpResponse) => {
        console.log(`SFTP RESPONSE : ${sftpResponse}`);
        return true;
    }).catch((err) => {
        console.log('ERROR IN SFTP_DAT ', err);
        throw err;
    });
}

module.exports = SFTP;
