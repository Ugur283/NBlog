const path = require('path');
const express = require('express');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate
const expressSession = require('express-session')
const MongoStore = require('connect-mongo');


mongoose.connect('mongodb://127.0.0.1:27017/nodeblog_db')
  .then(() => console.log('Connected!'));



app.use(expressSession({
  secret: 'test',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1:27017/nodeblog_db' })
}))


// Flash massage Middleware
app.use((req, res, next ) =>{
  res.locals.sessionFlash = req.session.sessionFlash
  delete req.session.sessionFlash
  next()
})


app.use(fileUpload())


app.use(express.static('public'))




app.engine('handlebars', exphbs.create({helpers:{generateDate:generateDate}}).engine);
app.set('view engine', 'handlebars');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users');
app.use('/' , main)
app.use('/posts' , posts)
app.use('/users' , users)



app.listen(port, hostname , () => {
    console.log(`Server Çalışıyor , http://${hostname}:${port}/`)
})