const express = require('express')
const router = express.Router()
const { createClient, deleteClient, getClient, getClients, updateClient } = require('./actions')

// GET by ID
router.get('/:id', getClient)

// GET clients
router.get('/', getClients);

// POST Create a Client
router.post('/', createClient)

// PUT Update a Client's info
router.put('/:id', updateClient);

// DELETE by ID
router.delete('/:id', deleteClient)

module.exports = router
