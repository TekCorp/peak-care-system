import Blog from '../models/blogModel.js';

// Blogs controller
const getBlogs = (req, res) => {
  Blog.find({})
  .then(blogs => {
    res.json({ message: 'Successfully retrieved blogs!', status: 'success', data: blogs });
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to retrieve blogs!', status: 'fail', error: error });
  });
};

const getBlogsId = (req, res) => {
  Blog.find({})
  .then(blogs => {
    const FilterBlog = blogs.map(ele => ele["slug_url"])
    res.json({ message: 'Successfully retrieved blogs!', status: 'success', data: FilterBlog });
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to retrieve blogs!', status: 'fail', error: error });
  });
};

const getBlogsByCategory = (req, res) => {
  const category_id = req.params.id;

  if (!category_id) return res.json({ message: 'URL identifier is required!', status: 'fail' });

  Blog.find()
    .then(blogs => { 
      const filteredBlogs = blogs.filter(blog => blog.category === parseInt(category_id));

      res.json({ message: 'Successfully retrieved blogs!', status: 'success', data: filteredBlogs });
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to retrieve blogs!', status: 'fail', error: error });
    });
};
  
const getBlogById = (req, res) => {
  const blog_id = req.params.id;

  if (!blog_id) return res.json({ message: 'URL identifier is required!', status: 'fail' });

  Blog.findOne({ blog_id: blog_id })
    .then(blog => {
      if (!blog) return res.json({ status: 'fail', message: 'Requested blog does not exist!' });

      res.json({
        status: 'success',
        message: 'Blog retrieved successfully!',
        data: blog
      });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to get the blog!',
        error: error
      });
    });
};

const createBlog = (req, res) => {
  const blog_object = req.body;
  if (!blog_object || Object.keys(blog_object).length === 0) return res.json({ message: 'Required parameters missing!', status: 'fail' });
      
  Blog.find({})
    .sort({ blog_id: -1 })
    .limit(1)
    .then(existingBlogs => {
      let nextId = 1;

      if (existingBlogs.length > 0) nextId = existingBlogs[0].blog_id + 1;

      const newBlog = new Blog({
        blog_id: nextId,
        ...blog_object
      });
      newBlog
        .save()
        .then(savedBlog => {
          res.json({
            status: 'success',
            message: 'Blog added successfully!'
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json({
            status: 'fail',
            message: 'Failed to add the blog!',
            error: error
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to add blog!',
        error: error
      });
    });
};

const updateBlog = (req, res) => {
  const blog_id = req.params.id;
  const blog_object = req.body;

  if (!blog_id) return res.json({ message: 'URL id is required!', status: 'fail' });

  if (!blog_object || Object.keys(blog_object).length === 0) return res.json({ message: 'Required parameters missing!', status: 'fail' });
     
  Blog.findOneAndUpdate({ blog_id: blog_id }, blog_object, { new: true })
    .then(updatedBlog => {
      if (!updatedBlog) return res.json({ message: 'Blog not found!', status: 'fail' });

      res.json({ message: 'Blog updated successfully!', status: 'success' });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to update the blog!',
        error: error
      });
    });
};

const deleteBlog = (req, res) => {
  const blog_id = req.params.id;

  if (!blog_id) return res.json({ message: 'URL id is required!', status: 'fail' });

  Blog.findOneAndDelete({ blog_id: blog_id })
    .then(deletedBlog => {
      if (!deletedBlog) return res.json({ message: 'Blog not found!', status: 'fail' });

      res.json({ message: 'Blog deleted successfully!', status: 'success' });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to delete the blog!',
        error: error
      });
    });
};

export{getBlogs, getBlogsId, getBlogsByCategory, getBlogById,  createBlog, updateBlog, deleteBlog}