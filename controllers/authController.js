import jwt from 'jsonwebtoken';
import { User } from '../model/user.model.js';
import bcrypt from 'bcryptjs'; 

//sign up
const signup = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before storing it in the database
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        await User.create({ username, email, password });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!password || !email) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found! Please sign up' });
        }


        // Compare the provided password with the hashed password in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        

        const payload = { userId: user._id, email: user.email };
        const newToken = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: 60 });

        res.cookie('token', newToken, { httpOnly: true }).status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

//login with JWT
const jwtLogin = (req, res) => {
    const token = req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(decoded);
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

//logout
const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: 'User logged out successfully' });
};

export {
    signup,
    login,
    jwtLogin,
    logout
}