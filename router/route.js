const express=require('express');
const {authentication}=require('./authantication')
const {others}=require('./other')

const router=express.Router();

router.use(express.json());
router.use(authentication)
router.use(others)


module.exports={router}