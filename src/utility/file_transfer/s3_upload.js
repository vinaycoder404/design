const AWS = require('aws-sdk');

const s3 = new AWS.S3();

function S3Upload(s3Params) {
    const params = {
        Bucket: s3Params.bucket,
        Key: s3Params.key_ctrl,
        Body: s3Params.filedata,
    };
    s3.putObject(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            throw err;
        }
        console.log(data);
    });
}

module.exports = S3Upload;
