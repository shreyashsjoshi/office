const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema({
    fname :{
        type : String,
        required : true

    },
    lastname :{
        type : String,
        required : true

    },
    email :{
        type : String,
        required : true,
        unique : true

    },
    pass : {
        type : String,
        required : true

    },
    rpass : {
        type : String,
        required : true

    }


})

//now we need to create a collections

const Register = new mongoose.model("Drive", EmployeeSchema);

module.exports = Register;


