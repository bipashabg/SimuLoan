"use client";
import { upload } from "@lighthouse-web3/sdk";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

const apiKey = "2d49449a.0394a4e240124eb691d00f861ca23d3f";

// Categories array
const categories = [
  "Art",
  "Collectibles",
  "Gaming",
  "Photography",
  "Music",
  "Videos",
];

const connectWalletHandler = async (setWalletAddress, setErrorMessage) => {
  try {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const address = await (await signer).getAddress();
      localStorage.setItem("walletAddress", address);
      setWalletAddress(address);
      console.log("Wallet connected:", address);
    } else {
      setErrorMessage("Please install MetaMask!");
    }
  } catch (error) {
    setErrorMessage("Failed to connect wallet. Try again.");
  }
};

const Minter = () => {
  const [status, setStatus] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    if (address) {
      setWalletAddress(address);
      console.log("Wallet Address:", address);
    } else {
      console.log("No wallet address found");
    }
  }, []);

  const AssetForm = () => {
    const [assetName, setAssetName] = useState("");
    const [tokenValue, setTokenValue] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState(null);
    const [additionalInfo, setAdditionalInfo] = useState("");

    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };

    const onMintPressed = async (e) => {
      e.preventDefault();
    
      // Ensure all required fields and file are present
      if (!file || !assetName || !tokenValue || !category) {
        alert("Please fill all required fields and upload a file");
        return;
      }
    
      console.log("File to upload:", file);
    
      try {
        // Upload the file to Lighthouse
        const response = await upload([file], apiKey);
        
    
        // Check if response exists and contains file hash
        if (response && response.data && response.data.Hash) {
          const fileUrl = response.data;
          const name=fileUrl.Name;
          localStorage.setItem("name",name);
          
          // localStorage.setItem("fileUrl",fileUrl);
          console.log(fileUrl);
    
          // Prepare asset data for tokenization
          const assetData = {
            assetName,
            tokenValue,
            category,
            fileUrl,  // Add the file URL from Lighthouse
            additionalInfo,  // Optional
            walletAddress,   // User's wallet address
          };
    
          console.log("Asset Data to be sent for tokenization:", assetData);
    
          // Add logic to send assetData to the backend for tokenization
          
    
        } 
      } catch (error) {
        console.error("Error uploading file:", error);
        alert("An error occurred while uploading the file. Please check the console for details.");
      }
    };
    
    // Function to send asset data to the backend for tokenization
    const sendAssetDataToBackend = async (assetData) => {
      try {
        const response = await fetch('/api/tokenize-asset', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(assetData),
        });
    
        return await response.json();
      } catch (error) {
        console.error("Error sending asset data to backend:", error);
        return { success: false };
      }
    };
    

    const handleLogout = () => {
      localStorage.removeItem("walletAddress");
      setWalletAddress(""); // Update state to reflect disconnection
      console.log("User logged out.");
    };

    return (
      <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="container flex justify-center items-center h-screen">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Time to tokenize
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Our support team will get back to you ASAP via email.
                </p>
                {walletAddress ? (
                  <div>
                    <p className="mb-4">Connected as: {walletAddress}</p>
                    <button
                      onClick={handleLogout}
                      className="rounded-sm bg-red-500 px-4 py-2 text-base font-medium text-white shadow-submit duration-300 hover:bg-red-600"
                    >
                      Disconnect Wallet
                    </button>
                    <form onSubmit={onMintPressed}>
                      <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 mb-4">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="block w-full border rounded-md p-2"
                            required
                          />
                        </div>
                        <div className="w-full px-4 mb-4">
                          <input
                            type="text"
                            placeholder="Asset Name"
                            value={assetName}
                            onChange={(e) => setAssetName(e.target.value)}
                            className="block w-full border rounded-md p-2"
                            required
                          />
                        </div>
                        <div className="w-full px-4 mb-4">
                          <input
                            type="text"
                            placeholder="Token Value"
                            value={tokenValue}
                            onChange={(e) => setTokenValue(e.target.value)}
                            className="block w-full border rounded-md p-2"
                            required
                          />
                        </div>
                        <div className="w-full px-4 mb-4">
                          <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full border rounded-md p-2"
                            required
                          >
                            <option value="">Select Category</option>
                            {categories.map((cat, index) => (
                              <option key={index} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="w-full px-4 mb-4">
                          <textarea
                            placeholder="Additional Info"
                            value={additionalInfo}
                            onChange={(e) => setAdditionalInfo(e.target.value)}
                            className="block w-full border rounded-md p-2"
                          />
                        </div>
                        <div className="w-full px-4">
                          <button
                            type="submit"
                            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                          >
                            Tokenize Asset
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-red-500 mb-4">Connect wallet to continue.</p>
                    <button
                      onClick={() => connectWalletHandler(setWalletAddress, setErrorMessage)}
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Connect Wallet
                    </button>
                    {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <AssetForm />
    </div>
  );
};

export default Minter;