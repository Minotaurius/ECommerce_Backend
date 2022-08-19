const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
// be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then((tagData) => {
      res.json(tagData);
    })
    .catch(err => {
      console.log(err)
    });
});

// find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
// be sure to include its associated Product data
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then((idTag) => {
      res.json(idTag);
    })
    .catch(err => {
      console.log(err)
    });
});

// create a new tag
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((newTag) => {
    res.json(newTag);
  })
  .catch(err => {
    console.log(err)
  });
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then((updateTag) => {
      res.json(updateTag);
    })
    .catch(err => {
      console.log(err)
    })
});

// delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then((deleteTag) => {
      res.json(deleteTag);
    })
    .catch(err => {
      console.log(err)
    })
});

module.exports = router;
