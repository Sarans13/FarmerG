const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
main().catch(err => console.log(err));
const Collection = require("../models/farmer-signups");
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmers').then(() =>{
    console.log((`connection successful`));
}).catch((e) =>{
    console.log((`connection unsuccessful`));
});
// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = Collection;