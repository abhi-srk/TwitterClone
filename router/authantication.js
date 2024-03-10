const express = require('express');
const authentication=express.Router();

const {checkSignupFormat}=require("../middleware/checkSignupFormate")

const {login,signup,logout, forgatepassword}=require('../function/authFunction')
const {doesEmailExist} = require("../middleware/doesEmailExist")

authentication.post('/login', login)
authentication.post('/signup', checkSignupFormat, doesEmailExist,signup)
authentication.post('/logout', logout)
authentication.post('/forgatepassword', forgatepassword)


module.exports={authentication}