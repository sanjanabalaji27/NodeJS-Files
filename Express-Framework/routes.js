const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req,res) => {
  res.send('Route 1: This is home router');
});

router.get('/profile', (req,res) => {
  res.send('Route 2: This is profile router');
});

router.get('/login', (req,res) => {
  res.send('Route 3: This is login router');
});

router.get('/logout', (req,res) => {
  res.send('Route 4: This is logout router');
});

app.use('/', router);

app.listen(process.env.port || 5500);

console.log('Web Server is listening at port '+ (process.env.port || 5500));

