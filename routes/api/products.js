// NOTE: You do not need to edit this file

const productsService = require('../../services/products')
const router = require('express').Router()

// Get All Products
router.get('/', (req, res) => {
  const sortBy = req.query.sort || 'id'
  const order = req.query.order || 'ASC'

  // get all products from the service
  productsService.findAll(sortBy, order)
    .then(products => {
      res.json(products)
    })
})

// Products Search
router.get('/search', (req, res) => {
  const key = req.query.key
  const value = req.query.value
  const sortBy = req.query.sort || 'id'
  const order = req.query.order || 'ASC'
  if (!key || !value) {
    res.status(400).json({ error: 'Invalid search query' })
    return
  }
  // use service to search products by query
  productsService.search(key, value, sortBy, order)
    .then(products => {
      res.json(products)
    })
})

// Get Product By Id
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    res.status(400).json({ error: 'Invalid ID' })
    return
  }

  // if valid, find product by id using service
  productsService.findOneById(id)
    .then(product => {
      if (!product) {
        res.status(404).json({ error: 'Product not found' })
        return
      }
      
      res.json(product)
    })
})

module.exports = router