const router = require('express').Router();
const user = require('../controllers/user.controller');
const validateBody = require('../middlewares/validateBody');
const verifyToken = require('../middlewares/verifyToken');
const { schemaUser } = require('../utils/schemas');

router.get('', verifyToken, user.getAll);
router.post('', validateBody(schemaUser), user.create);


module.exports = router;