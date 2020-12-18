const router = require("express").Router();
const User = require('../models/user');

router.post('/signin', (req, res) => {

});

router.post('/signup', (req, res) => {
    
    User.findOne(
        {
          _id: mongojs.ObjectId(req.params.id)
        },
        (error, data) => {
          if (error) {
            res.send(error);
          } else {
            res.send(data);
          }
        }
      );

    // User.findOne({ email: req.body.email })
    //     .exec((error, user) => {
    //         if (user) return res.status(400).json({
    //             message: 'User already registered'
    //         });

    //         const { 
    //             firstName, 
    //             lastName, 
    //             email, 
    //             password 
    //         } = req.body;

    //         const _user = new User({
    //             firstName, 
    //             lastName, 
    //             email, 
    //             password, 
    //             username: Math.random().toString()
    //         });

    //         _user.save((error, data) => {
    //             if (error) {
    //                 return res.status(400).json({
    //                     message: 'Something went awry'
    //                 });
    //             }

    //             if (data) {
    //                 return res.status(201).json({
    //                     user: data
    //                     // message: 'User created successfully'
    //                 })
    //             }
    //         });


    //     });

});

module.exports = router;