const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOD_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log("Connected to Mongodb successfully!");
}).catch((e) => {
    console.log(e);
})

// Prevent some deprecation warnings
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
}