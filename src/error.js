/* eslint no-unused-vars: 0 */

module.exports.catchErrors = (fn) => {
  return function (req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

module.exports.catchAll = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ message: err.message });
};

module.exports.notFound = (req, res, next) => {
  res.sendStatus(404);
};
