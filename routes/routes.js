const router = require('express').Router()

const {
    createUser,
    userLogin,
    authentication,

    
} = require('../controllers/controllers')

router.post('/register', createUser);

router.post('/login', userLogin);



module.exports = router