const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String,required: true},
    username: {type: String, required: true},    
    reactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'reaction' }],

},
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: {
            createdAt: 'created_at',
        },
    },
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.thoughtText.length;
})


const Thought = mongoose.model('thought', thoughtSchema);

const thoughtData = [
    {
        thoughtText: "This is a Test 'thought'. how nice!",
        username: 'Anotherguy9'
    },
    {
        thoughtText: "Another Post but this one sucks!",
        username: 'Newguy88'
    },
    {
        thoughtText: "I have two posts! lets see them both.",
        username: 'Newguy88'
    },
]


const seedThought = async () => {
    try {
        const data = await Thought.create(thoughtData)
    } catch (error) {
        console.log(error)
    }
}

// seedThought()

module.exports = Thought;
