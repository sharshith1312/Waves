const mongoose=require('mongoose');

var woodSchema=mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:1,
        maxlength:100
    }

})
var Wood=mongoose.model('Wood',woodSchema);
module.exports={ Wood }