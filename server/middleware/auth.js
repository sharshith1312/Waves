const { User }=require("./../models/user");

//middleware
var auth=function(req,res,next){
    let token=req.cookies.w_auth;

    // accessing findByToken from user model
    User.findByToken(token,function(err,user){
        if(err) throw err;
        if(!user) return res.json({
            isAuth:false,
            error:true
        });
        req.token=token;
        req.user=user ;
        next();
    })
}

module.exports={ auth }