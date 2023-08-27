const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const { User, Thought } = require('./models');


const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


app.get('/thought/:thoughtId', async (req, res) => {
  try {

    const thoughtId = req.params.thoughtId
    const data = await Thought.findOne({ _id: thoughtId })
      // .select('-__v')
      .select('username')
      .populate('user')


    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }

})



app.get('/all', async (req, res) => {
  try {
    const data = await Thought.find({}).populate('user')
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(404).json(error)
  }
})




db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
