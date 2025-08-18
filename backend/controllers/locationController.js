import Location from "../models/locationModel.js";

// Location Page controllers
const getLocationPages = (req, res) => {
Location.find()
  .then(locations => {
    res.json({ message: 'Successfully retrieved location content!', status: 'success', data: locations });
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to retrieve location content!', status: 'fail', error: error });
  });
};
 
const getLocationPageById = (req, res) => {
  const location_id = req.params.id;

  if (!location_id) return res.json({ message: 'URL identifier is required!', status: 'fail' });

  Location.findOne({ location_id: location_id })
    .then(locations => {
      if (!locations) return res.json({ status: 'fail', message: 'Requested location content does not exist!' });

      res.json({
        status: 'success',
        message: 'Successfully retrieved location content!',
        data: locations
      });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to get the location content!',
        error: error
      });
    });
};

const getLocationPageBySlug = (req, res) => {
  const slug_url = req.params.slug; 
  if (!slug_url) return res.json({ message: 'URL identifier is required!', status: 'fail' });

  Location.findOne({ slug_url: slug_url })
    .then(location => {
      if (!location) return res.json({ status: 'fail', message: 'Requested location content does not exist!' });

      res.json({
        status: 'success',
        message: 'Successfully retrieved location content!',
        data: location
      });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to get the location content!',
        error: error.message  
      });
    });
};

const createLocationPage = (req, res) => {
  const location_object = req.body;

  if (!location_object || Object.keys(location_object).length === 0) return res.json({ message: 'Required parameters missing!', status: 'fail' });
      
  Location.find()
    .sort({ location_id: -1 })
    .limit(1)
    .then(existingLocationContent => {
      let nextId = 1;

      if (existingLocationContent.length > 0) nextId = existingLocationContent[0].location_id + 1;

      const newLocationContent = new Location({
        location_id: nextId,
        ...location_object
      });

      newLocationContent
        .save()
        .then(savedLocationContent => {
          res.json({
            status: 'success',
            message: 'Location Content added successfully!'
          });
        })
        .catch(error => {
          res.status(500).json({
            status: 'fail',
            message: 'Failed to add the Location Content!',
            error: error
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to add Location Content!',
        error: error
      });
    });
};

const updateLocationPage = (req, res) => {
  const location_id = req.params.id;
  const location_object = req.body;

  if (!location_id) return res.json({ message: 'URL id is required!', status: 'fail' });

  if (!location_object || Object.keys(location_object).length === 0) return res.json({ message: 'Required parameters missing!', status: 'fail' });
     
  Location.findOneAndUpdate({ location_id: location_id }, location_object, { new: true })
    .then(updatedLocationContent => {
      if (!updatedLocationContent) return res.json({ message: 'Location Content not found!', status: 'fail' });

      res.json({ message: 'Location Content updated successfully!', status: 'success' });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to update the Location Content!',
        error: error
      });
    });
};

const deleteLocationPage = (req, res) => {
  const location_id = req.params.id;

  if (!location_id) return res.json({ message: 'URL id is required!', status: 'fail' });

  Location.findOneAndDelete({ location_id: location_id })
    .then(deletedLocationContent => {
      if (!deletedLocationContent) return res.json({ message: 'Location Content not found!', status: 'fail' });

      res.json({ message: 'Location Content deleted successfully!', status: 'success' });
    })
    .catch(error => {
      res.status(500).json({
        status: 'fail',
        message: 'Failed to delete the Location Content!',
        error: error
      });
    });
};

export{getLocationPages, getLocationPageById, getLocationPageBySlug, createLocationPage, updateLocationPage, deleteLocationPage}