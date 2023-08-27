const router = require('express').Router();
const reactionRoutes = require('./reactionRoutes');
const thoughtRoutes = require('./thoughtsRoutes');
const userRoutes = require('./userRoutes');
// const {reactionRoutes,thoughtRoutes, userRoutes} = require('./')

router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;
