const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

// Endpoint to indicate successful deployment
app.get('/deployed', (req, res) => {
  res.send('Deployment successful! The application is up and running.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
