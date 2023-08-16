const express = require('express');
const router = express.Router();
const Category = require('../../models/Category')

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/categories', (req, res) => {
    Category.find({}).lean().sort({$natural:-1}).then(categories => {
        res.render('admin/categories' , {categories:categories})
    })
});

router.post('/categories', async (req, res) => {
    try {
        const category = await Category.create(req.body);
        res.redirect('categories');
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
});


router.delete('/categories/:id', (req, res) => {

    Category.deleteOne({_id : req.params.id}).then(() => {
        res.redirect('/admin/categories')
    })

});


module.exports = router;
