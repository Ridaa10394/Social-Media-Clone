import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, username, email, password } = req.body;
  try {

    //Validate User Data
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //Validate email
    const existingemail = await User.findOne({ email });
    if (existingemail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    //Validate Username
    const existingusername = await User.findOne({ username });
    if (existingusername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    //Password Strength
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create new user
    const newUser = await User.create({ name, username, email, password :hashedPassword });
    return res.status(201).json({ message: "User created successfully", user: newUser });

  } catch (error) {
    console.error(error); // Add this line for debugging
}
}

