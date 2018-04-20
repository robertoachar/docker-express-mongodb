const User = require('./user.model');

// check
module.exports.check = async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    throw Error('User not found');
  }

  next();
};

// create
module.exports.create = async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json(user);
};

// delete
module.exports.delete = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);

  res.json(req.params.id);
};

// list
module.exports.list = async (req, res) => {
  const users = await User.find();

  res.json(users);
};

// update
module.exports.update = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();

  res.json(user);
};

// view
module.exports.view = async (req, res) => {
  const user = await User.findById(req.params.id);

  res.json(user);
};
