const mongoose = require('mongoose')
const Book = require('./book')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

// use the "pre" function to run before access this data base when we attempt to "remove"
// use standard function so that we can read the above stuff
authorSchema.pre('deleteOne', async function(next){
    // update per youtube comment by shiqihe1994
    try{
        const query = this.getFilter()
        const hasBook = await Book.exists({author: query._id})

        if(hasBook) {
            next(new Error("This author still has books."))
        } else {
            next()
        }
    } catch(err) {
        next(err)

    }
    
    
    // arrow functions are self containted
    // Book.find({ author: this.id }, (err, books) =>{
    //     if(err) {
    //         next(err)
    //     } else if (books.length > 0) {
    //         next(new Error('This author has books still'))
    //     } else {
    //         next()
    //     }
    // })
})

module.exports = mongoose.model('Author', authorSchema)