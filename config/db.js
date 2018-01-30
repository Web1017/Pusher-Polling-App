const mongoose = require('mongoose');

//Map global promises

mongoose.Promise = global.Promise;

//Mongoose Connection
mongoose.connect('mongodb://web1017:Niftaliyev1@ds119088.mlab.com:19088/pusherpollapp')
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
