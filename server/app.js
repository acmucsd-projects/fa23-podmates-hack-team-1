const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');
const e = require('express');
const { default: axios } = require('axios');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const session = require('express-session');
const UserProfile = require('./profiles/userProfile');
const apiRouter = require('./routes/apis');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter); //I think this is how we are able to communicate with data base (routers)
app.use('/api', apiRouter); 
//this is a middleware, basically like useEffect(), runs everytime a request is heard, it is mounted with app use

var user;

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    user = await UserProfile.findOne({ username: username });
    
    if (user === null) {
      return done(null, false);
    }

    // Use bcrypt to compare the provided password with the hashed password stored in the database
    const isValidPassword = (user.password === password);

    if (!isValidPassword) {
      return done(null, false);
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));


passport.use(new GoogleStrategy({     //google authentication
  clientID: '244357169962-d2n0eod73tfvt935ke5epbrcldfd97u0.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:5000/',
  scope: ['profile', 'email']
}, (accessToken, refreshToken, profile, done) => {
  user = User.findOne({username : profile.email}), function(err, existingUser){
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
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserProfile.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

app.get('/auth/user', (req, res) =>{
  res.send(user);
})

app.get('/auth', passport.authenticate(['local'], {
  successRedirect: '/auth/user'
}))

app.get('/auth/google', passport.authenticate(['google'], {
  successRedirect: '/auth/user',
  passReqToCallback: true
}))

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
