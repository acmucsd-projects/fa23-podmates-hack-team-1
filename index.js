//connecting to database config code extends to 
const express = require ('express');
const config = require ('./config');
const cors = require('cors');
const router = require ("./api");
const mongoose = require ('mongoose'); 

server.use(cors()); 
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/api', router); 

//remember to download mongoose! type into terminal: npm install mongoose
mongoose.connect(config.databaseUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MonogoDB database');
});

server.listen(config.PORT, () => {
    console.log('Server started on port ' + config.PORT);
});
