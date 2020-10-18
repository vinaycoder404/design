let express = require('express');
let router = express.Router();


let { listUser, createUser, updateUser, deleteUser } = require("./user");


router.post("/user/list", listUser);
router.post("/user/create", createUser);
router.post("/user/update", updateUser);
router.post("/user/delete", deleteUser);


module.exports = router;


