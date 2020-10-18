module.exports = { newUserTemplate, createTicketTemplate, forgotPasswordTemplate, createCommentTemplate, cronTemplate };

function newUserTemplate(data) {
    return "<html><body><h1>Welcome to Ticketing Tool "+data.user_name+"</h1><br /><p>Your login credentials are created.<br />To login, go to : <br /><a href=http://ticketing-tool.s3-website.ap-south-1.amazonaws.com/>Ticketing Tool Login</a> <br /> Username: "+data.user_name+"<br /> Password: "+data.password+"<br /><br /> You can change your password on :<br /><a href=http://ticketing-tool.s3-website.ap-south-1.amazonaws.com/setPassword?emailId="+data.email_id+"&newUser=true>Change your password</a></p><br /> <p>Thank You, <br /> Ticketing Tool Team</p></body></html>";
}

function forgotPasswordTemplate(data) {
    return "<html><body><h3>Hi "+data.user_name+",</h3><br/><p>You requested for password reset for your Ticketing Tool account.<br /> Click the link below to reset it :</p><a href=http://ticketing-tool.s3-website.ap-south-1.amazonaws.com/setPassword?emailId="+data.email_id+">Reset Password</a><br /><p>If you did not request for a password reset, please ignore this email.<br /><br /> Thank You,<br />Ticketing Tool Team</p></body></html>";
}

function createTicketTemplate(data) {
    return "<html><body><h3>Hi "+response.user_name+",</h3><br/><p>Your ticket has been created successfully!<br /> Your ticket details: <br />Ticket id: "+data.id+"<br />Ticket name: "+data.name+"<br />Created by: "+data.created_by+"</p></body></html>";
}

function createCommentTemplate(data) {
    return "<html><body><h3>Hi ,"+data.user_name+"</h3><br/><p>Comment details:<br />Ticket id: "+data.ticket_id+"<br />Comment: "+data.name+"<br />Commented by: "+data.created_by+"</p></body></html>"
}

function cronTemplate(data) {
    let id=data.id;
    let cn=data.categoryName;
    let sn=data.subcategoryName;
    console.log(id);
    id.map((e)=>{console.log( "Ticket Id:"+e)})
    cn.map((e)=>{console.log( "Category name :"+e)})
    sn.map((e)=>{console.log( "subcategory name :"+e)})
    return "<html><body><h3>Hi Admin, This critical ticket is getting no response</h3><br/><p>Ticket id: "+data.id+"</p><br/><p>Category Name: "+data.categoryName+"</p><br/><p>SubCategory Name: "+data.subcategoryName+"</p><br/><p>Edit Ticket: "+data[3]+"</p></body></html>"
}


