const Message = require('../models/DiscussionBoard');

const DiscussionBoardController = {

    /* get all messages (only admin) */
    async get_messages(req, res) {
        try {
            const msg = await Message.find();
            res.status(200).json({
                type: "success",
                carts
            })
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },

    /* get user messages */
    async get_message(req, res) {
        try {
            const msg = await Message.findOne({ userId: req.params.userId });
            if (!msg) {
                res.status(404).json({
                    type: "error",
                    message: "User doesn't exists"
                })
            } else {
                res.status(200).json({
                    type: "success",
                    cart
                })
            }
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    },



    /* Add reply */


};

module.exports = DiscussionBoardController;