const express = require('express');
const bodyParser = require('body-parser');
const key = require('./key');
const mongoose = require('mongoose');
const Profile = require('./profile');

mongoose.connect(key.mongoURI);
const app = express();
app.use(bodyParser.json());
const obj = {
  name: 'aek',
  weight: 62,
  status: 'handsome',
};
app.get('/apiget', async (req, res) => {
  console.log(findprofile);
  res.send('hi');
});
app.post('/apipost', async (req, res) => {
  console.log(req.body);
  const user = req.body;
  const profile = new Profile(user);
  await profile.save();
  console.log(typeof req.body);
  res.send(profile);
});
app.post('/apifind', async (req, res) => {
  console.log(req.body);
  const find = req.body;
  const findprofile = await Profile.findOne(find);
  // console.log(findprofile);
  res.json(findprofile);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
