//import the express
const express = require('express');
//import the mongoose
const mongoose = require('mongoose');
const router = require('./router/blogRouter')
const { result } = require('lodash');

//create app
const app = express();
//register the engine
app.set('view engine','ejs');
//to access the value from html file 
app.use(express.urlencoded({extended: true}));

//mongodburl
const  dbURL = 'mongodb+srv://rahul7315:rahul1122@cluster0.t7gzdss.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURL)
.then((result)=>app.listen(3000))
.catch((err)=> console.log(err));

//add blog
// app.get('/add-blog',(req,resp)=>{
//     //create the object 
//     const blog = new Blog({
//         title: "Hll",
//         snippet: "Hj",
//         author: "sds"
//     });
//     //store the data in database
//     blog.save()
//     .then((result)=>{
//         resp.save(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// });

app.get('/all-blogs',(req,resp)=>{
    Blog.find()
    .then((result)=>{
        resp.send(result);
       
    })
    .catch((err)=>{
        console.log(err);
    })
})

//index page
app.get('/',(req,resp)=>{
   resp.redirect('/blogs'); //redirect to the blogs page
});
//blogs page
app.use(router);


// add blog


//about the page
app.get('/about',(req,resp)=>{
    resp.render('about');
});

//use middle ware for 404 page
app.use((req,resp)=>{
    resp.render('404');
});