const { result } = require('lodash');
const Blog = require('../models/blogs');
//index page
const blog_index = (req,resp) =>{
    Blog.find()
    .then((result)=>{
        resp.render('index',{blogs: result});
    })
    .catch((err)=>{
        console.log(err);
    })
}
//add Blogs
const add_blogs = (req,resp)=>{
    const blog = new Blog(req.body)
        blog.save()
        .then((result)=>{
            resp.redirect('/blogs')
        })
        .catch((err)=>{
            console.log(err);
        })
}
//details_blog
const details_blog = (req,resp) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{
        resp.render('blog_details',{blog:result})
    })
    .catch((err)=>{
        resp.render('404');
    })
}
//delete blog
const delete_blog = (req,resp) => {
    const id= req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
        resp.json({redirect:'/blogs'});
    })
    .catch((err)=>{
        console.log(err);
    })
}


module.exports = {
    blog_index, add_blogs,details_blog,delete_blog
}