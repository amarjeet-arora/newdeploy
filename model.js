const mongoose = require('mongoose');

const empcrud = mongoose.model('empcrud', 
{ 
    uname: String,
    email:String ,
    password: String
});
module.exports=empcrud