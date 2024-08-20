const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if (req.query.name != null && req.query.name !== '') {
        searchOptions.name = new RegExp(req.query.name, 'i')
    }
    try {
        const authors = await Author.find(searchOptions)
        res.render('authors/index', { 
            authors: authors,
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')

    }
    // THIS BIT OF CODE WAS OVERWRITING THE ROUTER GET AND JUST DISPLAYING INDEX, WHICH CAUSED searchOptions TO NOT BE PASSED TO authors/index
    // res.render('authors/index')
})

// New Author Route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
})

// Create Author route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try {
        const newAuthor = await author.save()
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)

    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage:'Error creating Author...'
        })

    }



    // author.save().
    // then((newAuthor) => {
    //     res.render('authors')
    // }).
    // catch((err) => {
    //     res.render('authors/new', {
    //         author: author,
    //         errMessage:'Error creating Author...'
    //     })
    // })
})


// allows server.js to use this router variable
module.exports = router