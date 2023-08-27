const { User } = require('../../models');

const router = require('express').Router();


router.get( '/', async (req, res) => {
  try {
    const allThoughts = await Thought.find({})
    res.status(200).json(allThoughts)
  } catch (error) {
    res.status(404).json(error)
  }
})




router.get('/:thoughtId', async (req, res) => {
  try {
    const userId = req.params.userId
    const data = await User.findOne({ _id: userId }).populate('friends').populate('thoughts').exec()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})



router.post('/', async (req, res) => {
  try {
    const data = await User.create(req.body)
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})

router.put('/', async (req, res) => {
  try {

    //*example 
    // {
    //   "id": "64ea321d9e5fc03f5a231f83",
    //   "username" : "SmoothieGuy",
    //   "email" : "CoolnewGuy66@gmail.com"
    // }
    const {id, username, email } = req.body
    const data = await User.findByIdAndUpdate({_id: id},{username, email},{ new: true })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})

router.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId
    const data = await User.findOneAndDelete({ _id: userId })
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json(error)
  }

})


router.post('/addfriend/:userId', async (req, res) => {
  try {

    const userId = req.params.userId
    const friendId = req.body.friendId
    const data = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { friends: friendId } },
      { new: true }
      )

    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }

})




module.exports = router;