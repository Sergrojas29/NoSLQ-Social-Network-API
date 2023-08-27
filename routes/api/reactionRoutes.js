const router = require('express').Router();


const { Thought, Reaction } = require('../../models')


//* Create one thought
router.post('/', async (req, res) => {
    try {
        const {thoughtId, reactionBody, username} = req.body
        const data = await Reaction.create({reactionBody, username})
        const thoughtUpdate = await Thought
            .findByIdAndUpdate(thoughtId,{$addToSet: { reactions: data._id }}, {new: true})
            .populate('reactions')
        res.status(200).json(thoughtUpdate)
    } catch (error) {
        res.status(404).json(error)
    }

})



//* Get all thoughts
router.get('/', async (req, res) => {
    try {
        const allThoughts = await Reaction.find({})
        res.status(200).json(allThoughts)
    } catch (error) {
        res.status(404).json(error)
    }
})




//* Get one thought
router.get('/:thoughtId', async (req, res) => {
    try {
        const thoughtId = req.params.thoughtId
        const data = await Reaction.findOne({ _id: thoughtId })
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
})



//* Update one thought
router.put('/', async (req, res) => {
    try {
        const { id, reactionBody } = req.body
        const data = await Reaction.findByIdAndUpdate(id, { reactionBody }, { new: true })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

})


//* Delete one thought
router.delete('/:thoughtId', async (req, res) => {
    try {
        const thoughtId = req.params.thoughtId
        const data = await Reaction.findOneAndDelete({ _id: thoughtId })
        res.status(200).json(data)
    } catch (error) {
        res.status(404).json(error)
    }

})





module.exports = router;

