const express = require('express');
const fs = require('fs').promises; 
const path = require('path');
const app = express();
const PORT = 3000;

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/api/users', async (req, res) => {
  try {
    const dataFilePath = path.join(publicPath, 'data.json');

    const rawData = await fs.readFile(dataFilePath, 'utf-8');
    const jsonData = JSON.parse(rawData);

    res.json(jsonData.users);
  } catch (error) {
    console.error('Error reading data.json:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
