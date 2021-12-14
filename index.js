//npm install express
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const {request} = require('express');


//initialize express framework
const app = express();


//initialize body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//initialize ejs middleware
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/scss', express.static(__dirname + 'public/scss'));
app.use('/views', express.static(__dirname + '/views'));

//create “ENDPOINTS” aka route handlers
app.get('/', (req,res) => {
	res.render('index');
});

//nav routes
app.get('/views/index.ejs', (req,res) => {
	res.render('index');
});
app.get('/views/contact.ejs', (req,res) => {
	res.render('../contact.ejs');
});
app.get('/views/gallery.ejs', (req,res) => {
	res.render('../gallery.ejs');
});
app.get('/views/blog-single.ejs', (req,res) => {
	res.render('../blog-single.ejs');
});
app.get('/views/blog-archive.ejs', (req,res) => {
	res.render('../blog-archive.ejs');
});
app.get('/views/404.ejs', (req,res) => {
	res.render('../404.ejs');
});

const PORT = process.env.PORT || 3000;
//start server on a PORT
app.listen(PORT, () => console.log(`Server running on ${PORT}`));


// //imports
// const express = require('express')
// const app = express()
// const port = 3000

// //Static files
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/fonts', express.static(__dirname + 'public/fonts'))
// app.use('/img', express.static(__dirname + 'public/img'))
// app.use('/scss', express.static(__dirname + 'public/scss'))

// //Set views
// app.set('views', './views')
// app.set('views engine', 'ejs')


// app.get('', (req,res) => {
// 	res.render('index', { text: 'This is EJS'})
// })

// app.get('/gallery', (req,res) => {
// 	res.render('gallery', { text: 'Gallery page'})
// })

