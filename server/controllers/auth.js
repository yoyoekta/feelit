const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const connectDB = require("../utils/db");

const register = async (req, res) => {
    
    try{
        await connectDB();
        const { username, email, password } = await req.body;
        
        if (password.length < 8) {
            return res.status(400).json({ message: "Password less than 8 characters" })
        }
        if (password.length > 15) {
            return res.status(400).json({ message: "Password more than 15 characters" })
        }


        const existing = await User.findOne({email: email})
        if(existing){
            return res.status(200).json({
                success:false,
                message: "User already exists"
            })
        }
        else{
            
            const hashedPassword = await bcrypt.hash(password, 5);

            const user = new User({
                username: username,
                email: email,
                password: hashedPassword
            })
            const savedUser = await user.save();

            return res.status(201).json({
                success:true,
                message: "User registered successfully",
                savedUser
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "Error occurred while registering",
            err
        })
    }
}

const login = async(req, res) => {
    try{
        await connectDB();

        const {email, password} = req.body;
        const foundUser = await User.findOne({email:email});
        if(foundUser){
            console.log("User found");

            const matchPassword = await bcrypt.compare(password, foundUser.password);

            if(matchPassword){
                console.log("Password matched");
                const token = jwt.sign({id:foundUser._id, email:foundUser.email, role: foundUser.role}, process.env.JWT_SECRET, {expiresIn:'1d'})
                res.cookie('jwt', token, {
                        httpOnly:true,
                        maxAge: 24*60*60*1000
                    });
                return res.status(200).json({
                    success:true,
                    message:"Logged in successfully",
                    foundUser,
                    token
                })
            }
            else{
                return res.status(404).json({
                    success:false,
                    message:"Invalid Password"
                })
            }
        }
        else{
            return res.status(404).json({
                success:false,
                message:"User doesn't exist"
            })
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "Error occurred while login",
            err
        })
    }
}

const logout = (req, res) => {
    try{
        res.clearCookie('jwt');
        return res.status(200).json({
            success:true,
            message:"Logged out successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message: "Error occurred while logout",
            err
        })
    }
}
module.exports = { register, login, logout }