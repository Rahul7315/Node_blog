const express = require('express');
const router = express.Router();
const BlogController = require('../controller/blogController');
//add blogs
router.post('/blogs',BlogController.add_blogs);
//create Blog
router.get('/createBlog',(req,resp)=>{
    resp.render('createBlog');
});

//details blog
router.get('/blogs/:id', BlogController.details_blog)

//delete the blog
router.delete('/blogs/:id',BlogController.delete_blog);
// display all blogs  
router.get('/blogs', BlogController.blog_index);

module.exports = router;
