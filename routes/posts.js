const express = require('express');
const router = express.Router();
const Post = require('../models/Post')


router.get('/new' , (req, res) =>{
    res.render('site2/addpost')
})

router.post('/test' , (req, res) =>{
    Post.create(req.body)
    res.redirect('/')
})




module.exports = router
