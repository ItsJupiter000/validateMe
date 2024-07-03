// utils/sendEmail.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

export const sendOtpEmail = (to, otp) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otp} .This will only valid for 10 minutes`
    };

    return transporter.sendMail(mailOptions);
};
