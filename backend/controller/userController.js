import User from "../models/userModel.js";
import Address from "../models/addressModel.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
    try {
        // Check if a user with the same name already exists
        const existingUser = await User.findOne({ name: req.body.name });
    
        if (existingUser) {
          return res.status(400).json({ error: 'User with the same name already exists' });
        }
    
        // Create a new user
        const user = new User({ name: req.body.name });
        await user.save();
    
        // Create an address associated with the user
        const address = new Address({
          address: req.body.address,
          userId: user._id,
        });
        await address.save();
    
        res.status(201).json({ message: 'User registered and address stored successfully.' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
      }
  };

  export {registerUser};