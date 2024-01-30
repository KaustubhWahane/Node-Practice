const express = require('express');
const app = express();
const PORT = 3000;
const usersRoutes = require('./routes/usersRoutes');

app.use('/api/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server yaha se shuru hochuka hai ${PORT}`);
});
