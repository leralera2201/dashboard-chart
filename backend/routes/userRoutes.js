const express = require('express')
const User = require('./../models/User')
const bcrypt = require('bcrypt')
const {getToken} = require('./../util')

const router = express.Router()

router.post('/signin', async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({msg: 'Invalid credentials'})
        }
        bcrypt.compare(password, user.password, function(err, result) {
            if(result){
                return res.json({
                    token: getToken(user),
                    name: user.name,
                    surname: user.surname
                });
            }
            res.status(401).json({ msg: 'Invalid credentials' })
        })
    }catch (e) {
        console.log(e)
    }
})

router.post('/signup', async(req,res) =>{
    try{
        const {email, password, name, surname} = req.body
        const user = await User.findOne({email})
        if(user){
            return res.status(409).json({msg: 'User already exists'})
        }
        bcrypt.hash(password, 12, function (err, hash) {
            if (err) {
                console.log(err)
            }
            const newUser = new User({
                name,
                surname,
                email,
                password: hash,
            });

            newUser.save().then((user) => {
                if(user){
                    return res.json({
                        token: getToken(user),
                        name: user.name,
                        surname: user.surname})
                }
                res.status(401).json({msg: 'Invalid User Data.'})
            })
        })
    }catch (e) {
        console.log(e)
    }
})

// router.get('/createadmin',  (req,res)=> {
//     try{
//         bcrypt.hash('123456', 12, function (err, hash) {
//             const user = new User({
//                 name: 'Simple',
//                 surname: 'Admin',
//                 email: 'test@gmail.com',
//                 password: hash,
//                 isAdmin: true
//             })
//             user.save().then(newUser => res.send(newUser))
//         })
//
//     } catch (e) {
//         res.send({msg: e.message})
//     }
// })

module.exports = router
