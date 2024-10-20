import lighthouse from '@lighthouse-web3/sdk'

const apiKey = 'LIGHTHOUSE_API_KEY';
const uploadResponse = await lighthouse.upload(
  '', 
  apiKey
);

console.log(uploadResponse);