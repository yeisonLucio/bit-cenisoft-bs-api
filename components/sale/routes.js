const express = require('express')
const router = express.Router()
const { createSale, deleteSale, getSale, getSales, updateSale} = require('./actions')

// GET by ID
router.get('/:id', getSale)

// GET clients
router.get('/', getSales);

// POST Create a Client
router.post('/', createSale)

// PUT Update a Client's info
router.put('/:id', updateSale);

// DELETE by ID
router.delete('/:id', deleteSale)

module.exports = router
