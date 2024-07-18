const mongoose=require("mongoose")

var productSchema=mongoose.Schema({
    name:{
        required:true,
        type:String,
        unique:1,
        maxlength:100
    },
    description:{
        required:true,
        type:String,
        
        maxlength:100000
    },
    price:{
        required:true,
        type:Number,
        maxlength:25500
    },
    brand:{
        // here we make a reference to brand using object id because if name of
        // brand changes if we have producs with that brand it too much hard to modify
        // it hence we make use of objectId and if we change the brande name in data base it reflects to all
        type:mongoose.Schema.Types.ObjectId,
        ref:"Brand",
        required:true
    },
    shipping:{
        required:true,
        type:Boolean
    },
    available:{
        required:true,
        type:Boolean
    },
    wood:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wood",
        required:true

    },
    frets:{
        required:true,
        type:Number
    },
    sold:{
        type:Number,
        maxlength:100,
        default:0
    },
    publish:{
        // publish is used to relese the product at given data
        // if publish true its alreay released or false if not
        required:true,
        type:Boolean

    },
    images:{
        type:Array,
        default:[]
    }
},{timestamps:true});
// this time stamp will be automatically generate the time
var Product=mongoose.model('Product',productSchema)

module.exports={ Product }