const Sequelize = require('sequelize');

module.exports = (connection, DataType) => {
 const usersSchema = connection.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    image: {
        type: Sequelize.BLOB('medium'),
      
    },
   
    project: {
        type: Sequelize.STRING,
      
    },
    type: {
        type: Sequelize.STRING,
      
    },
    unique: {
        type: Sequelize.INTEGER,
      
    },
    is_active: {
        type: Sequelize.BOOLEAN,
       
    },  
    createdAt: {
        type: Sequelize.DATE,
        
    },
    updatedAt: {
        type: Sequelize.DATE,
       
    },
    
 },
 {
 classMethods: {
 },
 freezeTableName: true,
});

// usersSchema.sync().then(function () {
//     // Table created
//     return usersSchema.create({
//         id:1,
//         user_name: "admin",
//         email_id:"vishkarande4@gmail.com",
//        password : "admin",
//         is_active: true,
//         role_id:1,
//     });
// });


 return usersSchema;
};













