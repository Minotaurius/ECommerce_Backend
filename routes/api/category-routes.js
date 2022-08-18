const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      // be sure to include its associated Products
    }
  })
  .then((catData) => {
    res.json(catData)
    if(err) console.log(err);
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({ where: { id: req.params.id }, 
    include:[{ model: Product,
    attributes:['id', 'product_name', 'price', 'stock', 'category_id']}]
    })
  .then((catData) => {
    res.json(catData)
    if(err) console.log(err);
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
