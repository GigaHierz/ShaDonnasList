// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import "./Factory.sol";

/**
 * @title Membership
 * @dev Implements NFT Membership signup process
 */
contract Membership is ERC721, ERC721URIStorage, Ownable {
    Factory public f;

    constructor() ERC721("ShaDonna", "SDL") {}

    uint256 public constant maxSupply = 10000;
    uint256 private _price = 0.01 ether;

    function safeMint(
        address to,
        uint256 _tokenId,
        string memory _uri,
        string memory _name,
        string memory _symbol,
        uint256 _tokenAmount
    ) public payable onlyOwner {
        // require(_price <= msg.value, "Inconsistent amount sent!");
        _safeMint(to, _tokenId);
        _setTokenURI(_tokenId, _uri);
        f.createNewContributorToken(to, _name, _symbol, _tokenAmount);
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
