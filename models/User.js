const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validator.isEmail, 'Invalid email address'],
    },
    thoughts: { type: mongoose.Schema.Types.ObjectId, ref: 'thought' },
    friends: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },

})


const User = mongoose.model('user', userSchema);

userdata = [{ username: 'someGuy29 ', email: 'someGuy29@gmail.com' },
{ username: 'Anotherguy9 ', email: 'Anotherguy9@gmail.com' },
{ username: 'Newguy88 ', email: 'Newguy88@gmail.com' }]

const seedUser = async () => {
    try {
        const data = await User.create(userdata)
        console.log(data)
    } catch (error) {
        console.log(data)
    }
}

seedUser()

module.exports = User;





