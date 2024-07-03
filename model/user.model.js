import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      // required: [true, "Password is required"],
    },
    googleId: {
      type: String,
      // unique: true,
      sparse: true
    },
    otp: String,
    otpExpiry: Date
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  try {
    // Check if the password is modified or is new
    if (!this.isModified("password")) {
      return next();
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the salt
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

export const User = mongoose.model("User", userSchema);
