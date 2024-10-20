"use client"
import { useState, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import axios from "axios";
import { ethers } from "ethers"; // Make sure you have ethers.js installed

const ApplyLoan = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [showSummary, setShowSummary] = useState(false);
  const [tokenizedAssets, setTokenizedAssets] = useState([]); // State to hold fetched assets
  const [walletAddress, setWalletAddress] = useState(""); // State to hold connected wallet address
  const [fileURL, setFileURL] = useState(""); // State to hold file URL

  useEffect(() => {
    const fetchTokenizedAssets = async () => {
      try {
        // Get the connected wallet address
        if (typeof window.ethereum !== "undefined") {
          const provider = new ethers.BrowserProvider(window.ethereum);

          const accounts = await provider.send("eth_requestAccounts", []); // Request account connection
          const address = accounts[0];
          setWalletAddress(address); // Set the wallet address

          // Now fetch assets based on the wallet address
          const response = await axios.get(`https://gateway.lighthouse.storage/ipfs/bafkreigh3ftxb5h5ycs7bdxnsryuhswfdom764o67ifb6xqtnwfddwgbbi`); // Call your backend API
          setTokenizedAssets(response.data); // Update tokenized assets
        } else {
          console.error("Please install MetaMask!");
        }
      } catch (error) {
        console.error("Error fetching tokenized assets:", error);
      }
    };

    fetchTokenizedAssets();
  }, []); // Fetch assets when the component mounts

  const handleAssetChange = (e) => {
    const selected = e.target.value;
    setSelectedAsset(selected);

    // Find the selected asset to fetch its file URL
    // const asset = tokenizedAssets.find((asset) => asset.name === selected);
    // if (asset) {
    //   setFileURL(asset.fileURL); // Assuming fileURL is part of the asset object
    // } else {
    //   setFileURL(""); // Reset if no asset is found
    // }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSummary(true);
  };
  const name = localStorage.getItem("name");

  return (
    <section
      id="apply-loan"
      className="bg-black text-white py-16 md:py-20 lg:py-28"
    >
      <div className="container mx-auto">
        <SectionTitle
          title="Apply for Loan"
          paragraph="Use your tokenized assets to secure a loan. Review your details carefully before submitting your application."
          center
        />

        {/* Loan Request Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Loan Request Form
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Select Asset */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Select Tokenized Asset</label>
              <select
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                value={selectedAsset}
                onChange={handleAssetChange} // Use handleAssetChange instead of inline
              >
                <option value="" disabled>Select an asset...</option>
                <option value="name">{name}</option>
              </select>
            </div>

            {/* Display File URL if an asset is selected */}
            {fileURL && (
              <div className="mb-6">
                <p className="text-sm font-semibold">File URL:</p>
                <a
                  href={fileURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {fileURL}
                </a>
              </div>
            )}

            {/* Loan Amount */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Desired Loan Amount</label>
              <input
                type="number"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            {/* Loan Duration */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Loan Duration</label>
              <select
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="" disabled>Select duration...</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
              </select>
            </div>

            {/* Loan Purpose */}
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Loan Purpose</label>
              <textarea
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                placeholder="Briefly describe the purpose of this loan"
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-xl hover:from-blue-500 hover:to-purple-500 transition duration-300"
              >
                Submit Loan Application
              </button>
            </div>
          </form>
        </div>

        {/* Summary & Confirmation */}
        {showSummary && (
          <div className="bg-gray-900 p-8 rounded-lg shadow-xl mt-8 text-white">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Loan Summary
            </h3>
            <p className="mb-2">
              <strong>Selected Asset:</strong> {selectedAsset}
            </p>
            <p className="mb-2">
              <strong>Loan Amount:</strong> ${loanAmount}
            </p>
            <p className="mb-2">
              <strong>Loan Duration:</strong> {duration}
            </p>
            <p className="mb-2">
              <strong>Purpose:</strong> {loanPurpose}
            </p>

            <div className="text-center mt-6">
              <button
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-xl hover:from-teal-500 hover:to-green-500 transition duration-300"
              >
                Confirm & Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplyLoan;