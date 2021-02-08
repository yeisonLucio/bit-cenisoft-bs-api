const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bit-cenisoft-bookstore', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const con = mongoose.connection
con.on('error', console.error.bind(console, 'Error connecting to MongoDB'))
con.once('open', () => {
  console.log('Connected to MongoDB Successfully!')
})
