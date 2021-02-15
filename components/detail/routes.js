const express = require('express')
const router = express.Router()
const { createDetail, deleteDetail, getDetail, getDetails, updateDetail } = require('./actions')

// GET by ID
router.get('/:idSale/:id', getDetail)

// GET details
router.get('/:idSale', getDetails);

// POST Create a Client
router.post('/', createDetail)

// PUT Update a Client's info
router.put('/:id', updateDetail);

// DELETE by ID
router.delete('/:idSale/:id', deleteDetail)

module.exports = router
