const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MYSQL_CONFIG = require('./config/components/mysql');
 
const index =require('./src/controllers/v1/masters/index');
const app = express();
const today = new Date();
// const { PORT } = process.env;
const  PORT  = 3001	;
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
 
MYSQL_CONFIG.bootstrap();
const params = {
 startdate: `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`,
 enddate: `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`,
};
// asasasas /
app.listen(PORT, () => {
 console.log(`listening to ${PORT}`);
});

app.use(function (req, res, next) {
 
 next();
});
 
app.use("/", index);
 
module.exports = app;