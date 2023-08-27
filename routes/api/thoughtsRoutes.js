const router = require('express').Router();

const { Thought, User } = require('../../models')


//* Create one thought
router.post('/', async (req, res) => {
  try {
    const data = await Thought.create(req.body)
    const userUpdate = await User
      .findOneAndUpdate({ username: req.body.username }, { $addToSet: { thoughts: data._id } }, { new: true })
      .populate('thoughts')
      .populate('friends');
    res.status(200).json(userUpdate)
  } catch (error) {
    res.status(404).json(error)
  }

})



//* Get all thoughts
router.get('/', async (req, res) => {
  try {
    const allThoughts = await Thought.find({})
    res.status(200).json(allThoughts)
  } catch (error) {
    res.status(404).json(error)
  }
})




//* Get one thought
router.get('/:thoughtId', async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId
    const data = await Thought.findOne({ _id: thoughtId }).populate('reactions')
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})



//* Update one thought
router.put('/', async (req, res) => {
  try {
    const { id, thoughtText } = req.body
    const data = await Thought.findByIdAndUpdate(id, {thoughtText}, { new: true })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})


//* Delete one thought
router.delete('/:thoughtId', async (req, res) => {
  try {
    const thoughtId = req.params.thoughtId
    const data = await Thought.findOneAndDelete({ _id: thoughtId })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})





module.exports = router;
