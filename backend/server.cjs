const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Function to download a file from Lighthouse using the CID
const downloadFile = async (cid, savePath) => {
  try {
    const response = await fetch(`https://gateway.lighthouse.storage/ipfs/${cid}`);
    if (!response.ok) {
      throw new Error('Failed to fetch file from Lighthouse.');
    }
    const buffer = await response.arrayBuffer();
    fs.writeFileSync(savePath, Buffer.from(buffer));
    return savePath;
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
};

// API endpoint to retrieve the file using CID
app.get('/download/:cid', async (req, res) => {
  const { cid } = req.params;
  const fileName = `downloaded_${cid}.ext`; // Specify appropriate file extension if needed
  const filePath = path.join(__dirname, 'downloads', fileName); // Adjust this directory

  try {
    // Call the downloadFile function to fetch and save the file locally
    const savedFilePath = await downloadFile(cid, filePath);

    // Send the file to the user for download
    res.download(savedFilePath, fileName, (err) => {
      if (err) {
        console.error('Error sending file:', err);
        res.status(500).send('Error downloading the file');
      }
    });
  } catch (error) {
    res.status(500).send('Failed to download the file.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
