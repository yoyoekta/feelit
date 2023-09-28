const jwt = require('jsonwebtoken');

const checkAdmin = (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(400).json({
                success: false,
                msg: "Invalid Authentication" 
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    msg: "Invalid Authentication" 
                });
            }
            else {
                if (user.role !== "admin") {
                    return res.status(401).json({ 
                        success: false,
                        msg: "Admin resources access denied" 
                    });
                }
                else {
                    req.user = user;
                    next();
                }
            }
        })
    } catch (err) {
        return res.status(500).json({ 
            success: false,
            msg: err.message 
        });
    }
}

module.exports = checkAdmin;