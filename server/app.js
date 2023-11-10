const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); //gives and verifies cookies, could use after initial verification
//installed a couple of dependenices
const usersRouter = require('./routes/users');
const e = require('express');
const { default: axios } = require('axios');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const session = require('express-session');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('dsahfjf89481923ksdfaj')); //encryption key for cookies, not really important

app.use('/users', usersRouter); //I think this is how we are able to communicate with data base (routers)
//this is a middleware, basically like useEffect(), runs everytime a request is heard, it is mounted with app use

const User = mongoose.model('User', 'schema'); //imput user schema inside here

passport.use(new LocalStrategy((usernameInput, password, cb) => {     //client should return an hashed password
  User.findOne({username: username, password: password}), function(err,result){
    if(err){
      return cb(err, false, {message: 'incorrect username or password'})
    } else {
      cb(null, user, {message: 'login sucessful'});
    }
  }
}))

passport.use(new GoogleStrategy({     //google authentication
  clientID: '244357169962-d2n0eod73tfvt935ke5epbrcldfd97u0.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, user, done) => {
  User.findOne({email : user.email}), function(err, existingUser){
    if(err){
      return done(err, 'google log in failed, try again or register');
    }

    if(existingUser) {
      return done(null, existingUser);
    }
  }
}))


app.use(session({
  secret: '12344dhfiadjsfoijoiejoiffjas',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());  
 

passport.serializeUser((user, done) => { //these two methods stores and reads user session
  done(null, user.username);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findOne({username: username});
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.get('/', (req, res) =>{
  res.send("Hello Express");
})

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
