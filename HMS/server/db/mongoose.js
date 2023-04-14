const mongoose = require('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
// mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app");
// mongoose.connect("mongodb+srv://AdminShrish:shrish123@cluster0.oy4onul.mongodb.net/?retryWrites=true&w=majority");

mongoose.connect("mongodb+srv://AdminShrish:shrish123@cluster0.oy4onul.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database Connected Successfully!")
        })

module.exports = {mongoose};
