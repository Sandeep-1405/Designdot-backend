const router = require('express').Router()

const {
    createUser,
    userLogin,
    authentication,
    createBlog,
    getBlogs,
    getBlogByName
    
} = require('../controllers/controllers')

router.post('/register', createUser);

router.post('/login', userLogin);

router.post('/blog',authentication, createBlog);

router.get('/blogs',authentication, getBlogs);

router.get('/:title',authentication, getBlogByName);

module.exports = router