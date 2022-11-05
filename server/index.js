const express = require('express');
const app = express();
// const bodyparser=require("body-parser")
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoute = require('./routes/auth');
// const userRoute = require('./routes/users');

const User = require('./models/User');
const CryptoJS = require('crypto-js');



dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connection Successful'))
	.catch((err) => {
		console.error(err);
	});


app.use(express.json());

app.use('/api/auth', authRoute);
// app.use('/api/users', userRoute);



app.get('/get',()=>{
  console.log("Hello")
})

app.post('/register', async (req, res) => {
	console.log("hello")
  try {
	const {  email,upi_id, password } = req.body;
	const newUser = new User({
		
		email: email,
		upi_id:upi_id,
		password:password
	});
  console.log(newUser)
	
		const data = await newUser.save();
    console.log(data)
		res.json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});


app.listen(8800, () => {
	console.log('BackEnd server is running');
});






const Splitwise = require('splitwise')
const sw = Splitwise({
  consumerKey: 'CD6FVpDNwSeCnA1AT7tyUVyXbyhydbZ5gh7Jzbux',
  consumerSecret: 'ntgeNsbSp94F6hFULwhxoCcYm9Sj99HFRRtgphHm'
})


const currUser = sw.getCurrentUser()
console.log(currUser)
const grp = sw.getGroup().then(console.log)




