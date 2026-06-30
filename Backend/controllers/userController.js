const User = require("../models/User");

// Get Profile
exports.getProfile = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

// Update Profile
exports.updateProfile = async (req, res) => {

    try {

        const { name, phone, gender, dob, address } = req.body;

        const user = await User.findById(req.user.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            });
        }

        user.name = name || user.name;
        user.phone = phone || user.phone;
        user.gender = gender || user.gender;
        user.dob = dob || user.dob;
        user.address = address || user.address;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};