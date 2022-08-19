const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      // be sure to include its associated Products
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then((catData) => {
      res.json(catData);
    })
    .catch(err => {
      console.log(err)
    });
});


// find one category by its `id` value
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      // be sure to include its associated Products
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
    .then((idCat) => {
      res.json(idCat);
    })
    .catch(err => {
      console.log(err)
    });
});

// create a new category
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
    .then((newCat) => {
      res.json(newCat);
    })
    .catch(err => {
      console.log(err)
    });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((updateCat) => {
      res.json(updateCat);
    })
    .catch(err => {
      console.log(err)
    })
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deleteCat) => {
      res.json(deleteCat);
    })
    .catch(err => {
      console.log(err)
    })
});

module.exports = router;
