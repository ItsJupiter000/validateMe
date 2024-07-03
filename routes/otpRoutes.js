// routes/otpRoutes.js
import express from 'express';
import { emailOtp } from '../utils/emailOtp.js';
import { sendOtpEmail } from '../utils/sendEmail.js';
import { User } from '../model/user.model.js';

const router = express.Router();

// Route to send OTP
router.post('/send-otp', async (req, res) => {
    const { email } = req.body;
    // console.log(email);
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const otp = emailOtp();
        user.otp = otp;
        user.otpExpiry = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes
        await user.save();
        //Flow = Opt generated -> save to db -> sent to user
        await sendOtpEmail(user.email, otp);

        res.status(200).json({ message: 'OTP sent to email' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

// Route to verify OTP
router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body;

    try {
        const user = await User.findOne({ email, otp });
        if (!user) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        if (user.otpExpiry < Date.now()) {
            return res.status(400).json({ message: 'OTP has expired' });
        }

        user.otp = null;
        user.otpExpiry = null;
        await user.save();

        res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
});

export default router;


