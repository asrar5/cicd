const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve the index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n✨ Portfolio Website is running on http://localhost:${PORT}\n`);
    console.log('Press Ctrl+C to stop the server\n');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('\n🛑 Server shutting down...\n');
    process.exit(0);
});
