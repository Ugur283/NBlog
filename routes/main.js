const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const Category = require('../models/Category')



router.get('/' , (req, res) =>{
    console.log(req.session)
    res.render('site2/index')
})

// router.get('/admin' , (req, res) =>{
//     res.render('admin/index')
// })


router.get('/blog' , (req, res) =>{

    Post.find({}).sort({$natural:-1}).lean().then(posts => {
        Category.find({}).lean().then(categories => {
            res.render('site2/blog' , {posts:posts, categories:categories})
        })

    })

})

router.get('/contact' , (req, res) =>{
    res.render('site2/contact')
})




module.exports = router
