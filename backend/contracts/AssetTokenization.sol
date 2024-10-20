// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetTokenization is ERC721URIStorage, Ownable {
    uint256 public tokenCounter;

    event NFTMinted(uint256 indexed tokenId, string tokenURI);

    constructor() ERC721("AssetTokenization", "ATKN") Ownable(msg.sender) {
        tokenCounter = 0;
    }
    function mintNFT(string memory _tokenURI) public onlyOwner returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId); 
        _setTokenURI(newTokenId, _tokenURI); 
        emit NFTMinted(newTokenId, _tokenURI);
        tokenCounter += 1;
        return newTokenId;
    }
}
