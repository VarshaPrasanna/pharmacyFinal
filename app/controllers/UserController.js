const User = require('../models/User');
const bcrypt = require('bcrypt')

const UserController = {

    /* get all users */
    async get_users(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({
                type: "success",
                users
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }

    },

    /* get single user */
    async get_user(req, res) {
        try {
            const user = await User.findById(req.params.id);
            const { password, ...data } = user._doc;
            res.status(200).json({
                type: "success",
                data
            });

        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },
    /* get user info  */
    async get_myinfo(req, res) {
        try {
            const user = await User.findById(req.params._id);
            const { ...data } = user._doc;
            res.status(200).json({
                type: "success",
                data
            });

        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },



    /* update user */
    async update_user(req, res) {
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, 10)
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
                { new: true }
            );
            res.status(200).json({
                type: "success",
                message: "User updated successfully",
                updatedUser
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* delete user */
    async delete_user(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                type: "success",
                message: "User has been deleted successfully"
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },


    /* get user stats */
    get_stats(req, res) {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        const data = User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastYear }
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" }
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ]);
        res.status(200).json({
            type: "success",
            data
        })

    },
};

module.exports = UserController;