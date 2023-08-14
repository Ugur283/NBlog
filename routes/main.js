const express = require('express');
const router = express.Router();
const Post = require('../models/Post')



router.get('/' , (req, res) =>{
    res.render('site2/index')
})

router.get('/about' , (req, res) =>{
    res.render('site2/about')
})


router.get('/blog' , (req, res) =>{

    Post.find({}).lean().then(posts => {
        res.render('site2/blog' , {posts:posts})
    })

})

router.get('/contact' , (req, res) =>{
    res.render('site2/contact')
})

router.get('/login' , (req, res) =>{
    res.render('site2/login')
})

router.get('/register' , (req, res) =>{
    res.render('site2/register')
})



module.exports = router
