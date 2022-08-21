const { status } = require('express/lib/response');
const User = require('../models/hr');

module.exports.login_get = (req,res) => {
    console.log("succesful")
    res.render('auth/login');
}

module.exports.login_post = async (req,res) => { 
    // req.flash('success', 'Welcome');
    console.log("requested");
    console.log(req.user);
    res.json(req.user);
 }

module.exports.register_get = (req,res) => { 
    const { username, email } = req.query;
    if (username && email) res.render('auth/register', { username, email });
    else res.render('auth/register');
}

module.exports.register_post = async (req, res, next) => {
    //console.log(req.body);
    const username=req.body.email;
    const hrcompanyname=req.body.companyName;
    const password=req.body.password2; 
   

    try{
        const user = new User({username,hrcompanyname});
        // register(user, password, cb) Convenience method to register a new user instance with a given password. Checks if username is unique. This is provided by 'passport-local-mongoose'
        const registerUser = await User.register(user, password); // '.register' -> also checks if username exist in db or not. If it exists it throws an error that 'A user with the given username is already registered' . It will automatically save the user, so no need to use '.save()' . 
        req.login(registerUser, err => { // as we use isLoggedIn to home page, it will not take us to home page after singUp as we are not logged in, so to avoid to manually login after signUp we are loggin them here only.
            if(err) return next(err);
            // req.flash( 'success','Welcome');
            //res.redirect('/home');
            console.log("successfully added to database")
            res.json(req.user);
        })
    }catch(e){
        // req.flash('error', e.message); // if error it would be better to flash it, than taking user to error page.
        console.log(e);
        res.redirect('/users/register');
    }
    
}

module.exports.logout = (req, res) => {
    req.logOut();
    // req.flash('success', 'Bye');
    res.sendStatus(200);
};

