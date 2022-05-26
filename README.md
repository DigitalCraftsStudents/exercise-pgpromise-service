# Exercise: Build a Products Service

You are working on a team of developers and another team member has developed a RESTful API that will receive requests and send JSON responses. It is your job to create a "Service" which will interact with the database.

## Getting Started

1. Fork this repo using the button on this page
2. Clone it onto your computer (after changing into your projects folder)
3. Change into the directory
4. Copy the `.env.example` file to `.env` and update it to reflect the database settings for your computer
5. Install the node dependencies by running `npm install`
6. Check that there is a database that was created that contains all of the products

### Part 1: Initial Solution

The service has been imported into the `server.js` file for you and is already stubbed out inside of the `services/products.js` file. There are a few things to note:

* The `pg-promise` library has been used to create a database connection. This is exported from the `db.js` file and imported into `services/products.js` for you. You do not need to make a new connection and you can use the connection like so:
  ```js
  return db.query('SELECT * FROM products')
    .then((results) => {
      // do someting with `results`
    })
    .catch((e) => {
      // handle e (the error) if necessary
    });
  ```
* Just because the service methods have arguments does not mean you need to use them. Some of the arguments will be used in later features

You should implement the following features for the service methods:

* `findAll()`:
  * Use the `db` connection to build an SQL query that will get all of the products from the database and return them from the then function.
  * Be sure to return the correct data
  * Ignore the `orderBy` and `direction` parameters at this stage. They will be implemented in the next feature
* `findOneById(id)`:
  * Use the db connection to build a query that will return exactly 1 product that matches the `id` parameter, or null if none is found.
  * *NB:* You will likely need to use one of the other `db.`*`x()`* methods to ensure only 1 result is found.

### Implement Sorting

The product owner has decided that it would be good to implement sorting for the API. Whoever stubbed out the methods of the service already accounted for this and added two parameters that you can use to handle this. Implement sorting on the `findAll` method. It should be sortable using a property and a direction:
* Use the `orderBy` parameter to adjust your SQL query so that it can be ordered by a product column
* Use the `direction` parameter to adjust The direction query should be `'ASC'` or `'DESC'`
* *NB:* You will need to make sure that errors are handled gracefully if the `orderBy` or `direction` values are invalid
* *NB:* Make sure you sanitize the inputs that go into your SQL query

### Implement Search

You're behind on your work! The frontend team has already implemented a search api using the method that was stubbed out by your previous team member. Implement the search method so that the product owner doesn't start spreading rumors that it was you that cooked salmon in the lunchroom.

The function will receive four parameters:
* `key` - the property to search under
* `value` - the value to search for
* `orderBy` - use to determine what property the function should sort by
* `direction` - should be `'ASC'` or `'DESC'`. determines direction of sort

Use the for parameters to build a query that will return search results that match the given search term
* *NB:* You will need to make sure that errors are handled gracefully if the `orderBy` or `direction` values are invalid
* *NB:* Make sure you sanitize the inputs that go into your SQL query

## Product Table Schema
```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  description VARCHAR(255) NOT NULL,
  thumbnail VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  brand VARCHAR(64) NOT NULL,
  category VARCHAR(32) NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0)
);
```
