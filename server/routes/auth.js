const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// Register
router.post('/register', async (req, res) => {
	console.log("hello")
	const {  email,upi_id, password } = req.body;
	const newUser = new User({
		
		email: email,
		upi_id:upi_id,
		password: CryptoJS.AES.encrypt(
			password,
			process.env.SECRET_KEY
		).toString(),
	});

	try {
		const user = await newUser.save();
		res.json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

console.log("first")     
// Login
router.post('/login', async (req, res) => {
	const { email } = req.body;
	try {
		const user = await User.findOne({ email: email });
		!user && res.status(401).json('Wrong password or username!');

		const bytes = CryptoJS.AES.decrypt(
			user.password,
			process.env.SECRET_KEY
		);
		const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

		originalPassword !== req.body.password &&
			res.status(401).json('Wrong password or username!');

		
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;