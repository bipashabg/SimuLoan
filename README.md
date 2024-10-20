# SimuLoan: Decentralized Lending dApp
Turn real assets into digital value.

This decentralized lending dApp allows users to tokenize dummy versions of real-world assets and use them as collateral for loans and provide a simulation for real world asset trading instead of using Crypto. Built on Polygon’s zkEVM Cardano testnet, the application mints ERC-721 NFTs representing tokenized assets and securely stores metadata on IPFS via Lighthouse. No need to sign up or log in. Simply connect your wallet, tokenize assets, and request loans. Enjoy the ease of a fully decentralized platform.


![logo_with_bg](https://github.com/user-attachments/assets/9c96ab3a-31a0-4ffa-9053-30aa65390692)

##Workflow

![workflow](https://github.com/user-attachments/assets/60f3bd6e-cb22-42ce-a5da-5a2ff0b593e1)

## Features

- **Real-world Asset Tokenization Concept**: Users can tokenize assets as NFTs (ERC-721).
- **Collateralized Loans**: NFTs serve as collateral for borrowing funds.
- **Smart Contracts**: Built using Solidity and Hardhat for secure and efficient lending operations.
- **Decentralized Storage**: Asset metadata is stored on IPFS for immutability and easy access.
- **zkEVM Integration**: The platform is deployed on zkEVM, ensuring scalability and privacy.

## Tech Stack

- **Blockchain**: Polygon zkEVM Cardano testnet
- **Frontend**: Node.js with TypeScript
- **Backend**: Hardhat (JavaScript) for smart contracts and testing
- **NFT Minting**: ERC-721 via OpenZeppelin contracts
- **Storage**: IPFS using Lighthouse
- **Smart Contract Tools**: Solidity, Hardhat, Ethers.js

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Hardhat
- Metamask wallet extension
- IPFS account on Lighthouse
- RPC URL: `https://rpc.cardona.zkevm-rpc.com`

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bipashabg/SimuLoan.git
   cd SimuLoan
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

4. Run frontend and backend:
   
   On root directory:
   ```bash
   npm run dev
   ```

   cd backend:
   ```bash
   node server.js
   ```

### Deployment

1. Deploy the smart contract to the zkEVM Cardano testnet:

   ```bash
   npx hardhat run scripts/deploy.cjs --network zkEVMTestnet
   ```

2. Update the `.env` file with your zkEVM testnet details.

### Testing

To test the smart contracts, use:

```bash
npx hardhat test
```

To run:

```bash
npx hardhat node
```

### Minting NFTs

1. Call Minting function from frontend when clicked on "Tokenize Asset".

2. Store the token metadata (JSON) via Lighthouse and retrieve the CID for storage in the smart contract.

### Usage

1. Connect your Metamask wallet to the zkEVM Cardano testnet.
2. Tokenize an asset by uploading its metadata (image, value, category) to IPFS.
3. Use the minted NFT as collateral for loans.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://opensource.org/licenses/MIT)
