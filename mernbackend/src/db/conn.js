const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/vwpolo", {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true
}).then(() => {
    console.log('The DataBase is connected successfully');

}).catch((e) => {
    console.log('No DataBase Connected');
})





