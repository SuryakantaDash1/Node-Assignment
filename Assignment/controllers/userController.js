import User from '../models/User.js';
import Address from '../models/Address.js';


export const registerUser = async (req, res) => {
  try {
    const { name, addresses } = req.body;

    const user = new User({ name });
    await user.save();

    const addressLink = addresses.map(async (address) => {
      const newAddress = new Address({
        userId: user._id,
        address: address.address,
        city: address.city,
        pinCode: address.pinCode,
      });
      await newAddress.save();
      user.addresses.push(newAddress._id);
    });

    await Promise.all(addressLink);
    await user.save();

    res.status(201).json({ message: 'User and addresses saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user and addresses', error });
  }
};
