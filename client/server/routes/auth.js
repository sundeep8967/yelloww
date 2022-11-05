const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register
router.post('/register', async (req, res) => {
		const saltPassword = await bcrypt.genSalt(10)
    	const securePassword = await bcrypt.hash(req.body.password, saltPassword)
		User.findOne({
			email_id: req.body.email_id
		}, (err, user) => {
			if (user) {
				res.send({
					message: "User Already registered"
				})
			} else {
	
				const user = new User({
					email_id: req.body.email_id,
					upi_id:req.body.upi_id,
					password: securePassword
					
				})
				user.save(err => {
					if (err) {
				   
						res.send(err)
					} else {
						res.send({
							message: "Successfully Registered",user:user
						})
					}
				})
			}
		})
		
});
    
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