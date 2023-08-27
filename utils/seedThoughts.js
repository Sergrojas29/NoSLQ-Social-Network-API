const connection = require('../config/connection');
const { Thought, User } = require('../models');


const comments = [
  'Decision Trackers are awesome',
  'Find My Phone is a useful app',
  'Learn Piano is not very good for learning Piano',
  'Starbase Defender is a great game, I love it',
  'Tower Defense is okay',
  'Monopoly Money is better than real money IMO',
  'Movie trailers are just the best parts of a movie distilled into 90 seconds',
  'Hello world, this is a comment',
  'Social media is a big waste of time',
  'Notes is my most used app',
  'Messages is open on my computer 24/7',
  'Email is open on my computer',
  'Compass is never opened',
  'Firefox is great for privacy',
];


connection.on('error', (err) => err);

connection.once('open', async () => {
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  const result = await Thought.collection.insertMany(comments);
  console.log(result);
  process.exit(0);
});
