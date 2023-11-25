const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const usersRouter = require('./routes/users');
const e = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const session = require('express-session');
const UserProfile = require('./profiles/userProfile');
const apiRouter = require('./routes/apis');
const app = express();
const cors = require('cors');

const CustomStrategy = require('passport-custom');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter); //I think this is how we are able to communicate with data base (routers)
app.use('/api', apiRouter); 
//this is a middleware, basically like useEffect(), runs everytime a request is heard, it is mounted with app use

const corsConfig = {
  credentials: true,
  origin: ['http://localhost:3000', 'https://oauth2.googleapis.com']
};
app.use(cors(corsConfig));

passport.use(new LocalStrategy(async (username, password, done) => {
  try {
    let user = await UserProfile.findOne({ username: username });
    
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


passport.use(new CustomStrategy(async (req, done) => {
    try{
      let user = await UserProfile.findOne({username: (req.query.username + '@ucsd.edu')});
      if(!(user === null)){
        return done(null, user);
      } else {
        return done(null, false);
      }
    }catch(error) {
      return done(error, false);
    }
}))


app.use(session({
  secret: '12344dhfiadjsfoijoiejoiffjas',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());  
 

passport.serializeUser((user, done) => { //these two methods stores and reads user session
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await UserProfile.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});


app.get('/auth', passport.authenticate(['local'], {
  successRedirect: '/'
}))

app.get('/auth/google', passport.authenticate(['custom'], {
  successRedirect: '/'
}))

app.get('/isAuth', checkAuthentication, (req,res) => {
  res.redirect('/');
})

app.post('/reg', (req, res) => {
  UserProfile.findOne({username: req.query.username}).then((user) => {
    if(user) {
      return res.status(400).send('this user has already been saved into this account');
    } else {
      const newUser = new UserProfile({username: req.query.username, password: req.query.password});
      newUser.save();
      return res.status(200).send("success");
    }
  })
} 
)  

app.get('/', (req, res) => {
  res.send('');
})
function checkAuthentication(req,res){
  if(req.isAuthenticated()){
      res.send(req.user);
      res.status(200);
      console.log('isAuthenticated');
  } else if(req.cookies === null){
      res.status(403);
  }
}
dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
