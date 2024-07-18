const mongoose=require("mongoose");

var brandSchema=mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:1,
        maxlength:100
    }
})

var Brand=mongoose.model('Brand',brandSchema);

module.exports={ Brand }