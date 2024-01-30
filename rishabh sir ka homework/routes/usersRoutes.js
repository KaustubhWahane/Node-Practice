const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

const logTimeMiddleware = (req, res, next) => {
  const startTime = new Date();

  res.once('finish', () => {
    const endTime = new Date();
    const elapsedTime = endTime - startTime;

    console.log(`[${new Date()}] ${req.method} ${req.originalUrl} - Time Taken: ${elapsedTime}ms`);
  });

  // Continue with the next middleware or route handler
  next();
};

router.use(logTimeMiddleware);

router.use(express.static('public'));

router.get('/', async (req, res) => {
  try {
    const filePath = path.resolve(__dirname, '..', 'public', 'data.json');
    const rawData = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    res.json(jsonData.users);
  } catch (error) {
    console.error('Error reading data.json:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    const filePath = path.resolve(__dirname, '..', 'public', 'data.json');
    const rawData = await fs.readFile(filePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    const user = jsonData.users.find((user) => user.id === userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Aesa koi user nahi hai!");
    }
  } catch (error) {
    console.error('Error reading this file:', error.message);
    res.status(404).send('File read error');
  }
});

module.exports = router;
