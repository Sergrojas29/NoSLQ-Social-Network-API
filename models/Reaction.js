const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: {type: String,
         required: true,
         minLength: 1,
         maxlength: 250,
        },
    username: {type: String, required: true},    
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


const Reaction = mongoose.model('reaction', reactionSchema);

const reactionData = [
    {
        reactionBody: "",
        username: 'Newguy88'
    },
    {
        reactionBody: "",
        username: 'TheMan56'
    },
    {
        reactionBody: "",
        username: 'TheMan56'
    },
]



module.exports = Reaction;
