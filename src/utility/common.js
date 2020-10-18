var generator = require('generate-password');

var multer = require('multer')
var multerS3 = require('multer-s3')
var aws = require('aws-sdk')
var s3 = new aws.S3({})

function passwordGenerator() {
    return new Promise((resolve, reject) => {
        resolve(generator.generate({
            length: 8,
            numbers: true
        }))
    })
}

const uploadToS3 = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'ticketing-tool',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            // console.log(req)
            // console.log(JSON.stringify(file))
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            let fileName = Date.now().toString() + "-" + file.originalname;
            cb(null, "attachments/" + fileName);
            // resolve();
        }
    })
}).array('file', 10);

module.exports = { passwordGenerator, uploadToS3 };

