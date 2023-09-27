 const logout = (req, res) => {
    	//borra el token
	res.cookie('token', '', {
		expires : new Date(0)
	})
	return res.sendStatus(200)

 }

 module.exports = logout