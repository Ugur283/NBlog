const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.render('site2/register');
});

router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        req.session.sessionFlash = {
            type: 'alert alert-danger',
            message: 'Kullanıcı Oluşturuldu'
        }
    
            res.redirect('/users/login');
    } catch (error) {
        // Hata işleme kodu
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
});

router.get('/login', (req, res) => {
    res.render('site2/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).exec();
        if (user) {
            if (user.password === password) {
                req.session.userId = user._id
                res.redirect('/');
            } else {
                res.redirect('/users/login');
            }
        } else {
            res.redirect('/users/register');
        }
    } catch (error) {
        // Hata işleme kodu
        console.error(error);
        res.status(500).send('Bir hata oluştu.');
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(() =>{
        res.redirect('/');
    })
    
});


module.exports = router;
