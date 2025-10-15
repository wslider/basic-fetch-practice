const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();

app.use(cors({ origin: 'http://127.0.0.1:5503' }));

// Proxy endpoint to fetch users.json from GitHub
app.get('/fetch-users', async (req, res) => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/dan-collins-dev/dummy-data-fetching-repo/main/data/users.json');
    if (!response.ok) {
      throw new Error(`GitHub fetch failed with status ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Server Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});