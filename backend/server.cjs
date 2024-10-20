const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;


app.use(express.json());

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


app.get('/download/:cid', async (req, res) => {
  const { cid } = req.params;
  const fileName = `downloaded_${cid}.ext`;
  const filePath = path.join(__dirname, 'downloads', fileName); 

  try {
    
    const savedFilePath = await downloadFile(cid, filePath);

   
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


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
