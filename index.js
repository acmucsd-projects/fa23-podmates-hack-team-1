// //https://www.npmjs.com/package/express-basic-auth
// //https://blog.logrocket.com/adding-login-authentication-secure-react-apps/
// const express = require('express');
// const logger = require('morgan');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const basicAuth = require('express-basic-auth'); //does basic authentication
// const cookieParser = require('cookie-parser'); //gives and verifies cookies, could use after initial verification
// //installed a couple of dependenices
// const usersRouter = require('./routes/users');
// const e = require('express');
// const { default: axios } = require('axios');

// const app = express();

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('dsahfjf89481923ksdfaj')); //encryption key for cookies, not really important
//server.use('/api', router); 

// app.use('/users', usersRouter); //I think this is how we are able to communicate with data base (routers)
// //this is a middleware, basically like useEffect(), runs everytime a request is heard, it is mounted with app use
 
// const auth = basicAuth({
//   users: {
//     admin: '123',
//     user: '456',
//   },
// });



// app.get('/authenticate', auth, (req, res) => {   //authenticates, takes in an username and password, checks it against the users object
//   res.status(200).send("success");
//   console.log("successfully authenticate");
  
//   const options = {          
//     httpOnly:true,
//     signed:true
//   }

//   res.cookie('name', 'user', options).send("you received a cookie");  //after authenticaltion, sends cookie to client with a name and user identification
// })

// app.get('/readCookie', (req, res) => {   //reads cookies, could be called with first render useEffect
//   if(req.signedCookies.name === 'user'){
//     res.status(200).send("success");
//   } else {
//     res.status(401).send("cookie-invalid");
//   }
// })

// app.get('/clearCookie', (req, res) => {  //clears cookies, called during logout
//   res.clearCookie('name').end();
// })

// app.get('/', (req, res) =>{
//   res.send("Hello Express");
// })

// dotenv.config();

// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true }).then(() => {
//   console.log('Connected to MongoDB database');
// });

// module.exports = app;
