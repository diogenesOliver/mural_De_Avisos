const express = require('express')
const posts = require('../model/posts')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()
const options = {origin: 'http://localhost:3000'}


router.use(cors(options))

router.get('/all', (req, res) => {

    res.json(JSON.stringify(posts.getAll()))
    
})

router.post('/new', bodyParser.json(), (req, res) => {
    
    let title = req.body.title
    let description = req.body.description

    posts.newPost(title, description)

    res.send('Post adcionado')

})

module.exports = router