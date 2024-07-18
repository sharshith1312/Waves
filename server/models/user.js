var mongoose=require("mongoose");
var bcrypt=require("bcrypt");
var SALT_I=10;
var jwt=require("jsonwebtoken");
require('dotenv').config();


var userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,//trimming all the white spaces
        unique:1

    },
    password:{
        type:String,
        required:true,
        minlength:3
    },
    name:{
        type:String,
        required:true,
        maxlength:100
    },
    lastname:{
        type:String,
        required:true,
        maxlength:100
    },
    cart:{
        type:Array,
        default:[]
    },
    history:{
        type:Array,
        default:[]
    },
    role:{
        type:Number,
        default:0
    },
    token:{
        type:String
    }
})

// userScema.pre method is used to change something before saving the user info to data base
// here we are hasing the paassword changing its value and then after wards saving it to the database
userSchema.pre('save',function(next){
    var user=this;
    // this refers to particular userSchema user
    if(user.isModified('password')){
        // user.isModified('value') is pre defined in java script to check wether the given value
        // is modified or not
        bcrypt.genSalt(SALT_I,function(err,salt){
            if(err) return next(err);
            bcrypt.hash(user.password,salt,function(err,hash){
                if(err) return next(err);
                user.password=hash;
                next();
                // next() after modifing saving to database process 
            })
        })
    }
    else{
        next();
    }
})


userSchema.methods.comparePassword=function(candidatePassword,cb){
    // cb means call back function
    bcrypt.compare(candidatePassword,this.password,function(err,isMatch){
        if(err) return cb(err);
        cb(null,isMatch)
    })
}

userSchema.methods.generateToken=function(cb){
    var user=this;
    var token=jwt.sign(user._id.toHexString(),process.env.SECRET);

    user.token=token;
    // save to database
    user.save(function(err,user){
        if (err) return cb(err);

        cb(null,user);
    })
}

userSchema.statics.findByToken=function(token,cb){
    var user=this;
    // grab the token verify with jwt and we get user id if we didint get they are nor authenticated

    jwt.verify(token,process.env.SECRET,function(err,decode){
        // here decode is user_id
        user.findOne({"_id":decode,"token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user)
        })
    })
}
// creating the mongoose model
var User=mongoose.model('User',userSchema);

module.exports={ User }