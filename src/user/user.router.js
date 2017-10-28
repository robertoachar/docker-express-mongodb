const userController = require('./user.controller');
const { catchErrors } = require('../error');

module.exports = (router) => {
  router.get('/users',
    catchErrors(userController.list)
  );

  router.get('/users/:id',
    catchErrors(userController.check),
    catchErrors(userController.view)
  );

  router.post('/users',
    catchErrors(userController.create)
  );

  router.put('/users/:id',
    catchErrors(userController.check),
    catchErrors(userController.update)
  );

  router.delete('/users/:id',
    catchErrors(userController.check),
    catchErrors(userController.delete)
  );
};
