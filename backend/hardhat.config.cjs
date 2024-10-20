require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    zkEVMTestnet: {
      url: 'https://rpc.cardona.zkevm-rpc.com', 
      accounts: [process.env.ZKEVM_PRIVATE_KEY],
      chainId: 2442
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, 
  },
};

