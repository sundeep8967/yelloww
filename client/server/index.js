const express = require('express');
const app = express();
const bodyparser=require("body-parser")
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');

dotenv.config();


app.use(bodyparser.json())
app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:true}))



mongoose.connect(process.env.MONGO_URL,()=>{
	console.log('DB Connection Successful')
})


app.use(express.json());


app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);



app.listen(8000, () => {
	console.log('BackEnd server is running');
});






// const Splitwise = require('splitwise')
// const sw = Splitwise({
//   consumerKey: 'CD6FVpDNwSeCnA1AT7tyUVyXbyhydbZ5gh7Jzbux',
//   consumerSecret: 'ntgeNsbSp94F6hFULwhxoCcYm9Sj99HFRRtgphHm'
// })


// const currUser = sw.getCurrentUser()
// console.log(currUser)
// const grp = sw.getGroup().then(console.log)




