// @ts-check

/** @var db the database connection */
const db = require('../db')

/**
 * find all products and optionally order them
 * @param {string} orderBy the field to order by (default: id)
 * @param {'ASC' | 'DESC' | string} direction the direction to order by ()
 * @returns {Promise<Product[]>} all products
 */
function findAll(orderBy = 'id', direction = 'ASC') {
  // TODO: implement this function
  return 
}

/**
 * find one product by its id
 * @param {number} id id of the product
 * @returns {Promise<Product | null>} the product with the given id or null if not found
 */
function findOneById(id) {
  // TODO: implement this function
  return
}

/**
 * Search products by a given key and value
 * @param {string} key the product property to search by (i.e. name, price, etc)
 * @param {string} value the value to search for
 * @param {string} orderBy the property to order by (i.e. name, price, etc)
 * @param {'ASC' | 'DESC'} direction the direction to order by (must be ASC or DESC)
 * @returns {Promise<Product[]>} the products that match the search criteria
 */
function search(key, value, orderBy = 'id', direction = 'ASC') {
  // TODO: implement this function
  return
}

module.exports = {
  findAll,
  findOneById,
  search
}

/**
 * @typedef Product
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} thumbnail
 * @property {string} price
 * @property {string} category
 * @property {string} quantity
 */