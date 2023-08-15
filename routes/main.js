const express = require('express');
const router = express.Router();
const Post = require('../models/Post')



router.get('/' , (req, res) =>{
    console.log(req.session)
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




module.exports = router
