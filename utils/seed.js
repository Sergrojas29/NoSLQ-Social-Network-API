const connection = require('../config/connection');
const { User } = require('../models');
const { ObjectId } = require('mongodb');


// const id1 = new ObjectId("4545115648961321321")
// const id2 = new ObjectId("4651651621321651322")
// const id3 = new ObjectId("4651651621321651323")
// const id4 = new ObjectId("4651651621321651324")


const userdata = [
  { username: 'SomeGuy29', email: 'someGuy29@gmail.com' },
  { username: 'Anotherguy9', email: 'Anotherguy9@gmail.com' },
  { username: 'Newguy88', email: 'Newguy88@gmail.com' },
  { username: 'TheMan56', email: 'TheMan56@gmail.com' },
  { username: 'SoothPersonMan', email: 'SoothPersonMan@gmail.com' },
  { username: 'Elparton8', email: 'Elparton8@gmail.com' },
]


connection.on('error', (err) => err);

connection.once('open', async () => {
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  const result = await User.collection.insertMany(userdata);
  console.log(result);
  process.exit(0);
});
