const hre = require("hardhat");

async function main() {
  console.log("Deploying AssetTokenization...");

  // Get the contract factory
  const AssetTokenization = await hre.ethers.getContractFactory("AssetTokenization");

  // Log the contract factory to ensure it is valid
  console.log("Contract Factory initialized:", AssetTokenization);

  try {
    // Deploy the contract and wait for it to be mined
    const assetTokenization = await AssetTokenization.deploy();
    
    // Log the transaction hash for the deployment
    console.log("Deployment transaction hash:", assetTokenization.deployTransaction.hash);

    // Wait for the contract to be fully deployed (mined and confirmed)
    await assetTokenization.deployed();

    // Log the address where the contract is deployed
    console.log("AssetTokenization deployed to:", assetTokenization.address);
    
  } catch (error) {
    // Enhanced error handling for common deployment issues
    console.error("Error during deployment:", error.message);

    if (error.message.includes("out of gas")) {
      console.error("Possible out of gas error. Consider increasing the gas limit or funding the account.");
    } else if (error.message.includes("invalid sender")) {
      console.error("Invalid sender. Check your private key, account address, and balance.");
    } else if (error.message.includes("transaction failed")) {
      console.error("Transaction failed. Review the contract logic or network conditions.");
    } else {
      console.error("An unexpected error occurred:", error);
    }
  }
}

// Error handling for script execution
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
