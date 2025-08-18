import Category from "../models/categoryModel.js";

const getAllCategories = (req, res) => {
    Category.find().select({ __v: 0, _id: 0 })
    .then(category => {
      res.json({ message: 'Successfully retrieved categories!', status: 'success', data: category });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrieve categories!', status: 'fail', error: error });
    });
};

const getIdCategories = (req, res) => {
    const catId = req.params.id;
    Category.find({category_id:catId}).select({ __v: 0, _id: 0 })
    .then(category => {
        console.log("catagory",category);
      res.json({ message: 'Successfully retrieved categories!', status: 'success', data: category[0] });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrieve categories!', status: 'fail', error: error });
    });
};

const createCategory = (req, res) => {
    const category_object = req.body;
  
    if (!category_object || Object.keys(category_object).length === 0) return res.json({ message: 'Required parameters missing!', status: 'fail' });

    Category.find()
    .sort({ category_id: -1 })
    .limit(1)
    .then(existingCategories => {
    let nextId = 1;

    if (existingCategories.length > 0) nextId = existingCategories[0].category_id + 1;

    const newCategory = new Category({
        category_id: nextId,
        ...category_object
    });
  
    newCategory
        .save()
        .then(savedCategory => {
            res.json({
                status: 'success',
                message: 'Category added successfully!'
            });
        })
        .catch(error => {
            res.status(500).json({
                status: 'fail',
                message: 'Failed to add the category!',
                error: error
            });
        });
    })
    .catch(error => {
        res.status(500).json({
            status: 'fail',
            message: 'Failed to add category!',
            error: error
        });
    });
};

export {getAllCategories, createCategory ,getIdCategories};