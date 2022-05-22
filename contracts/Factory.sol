//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "./ContributorToken.sol";

contract Factory {
    ContributorToken[] public ContributorTokenArray;

    function createNewContributorToken(
        address to,
        string memory _name,
        string memory _symbol,
        uint256 _nbTokens
    ) public {
        ContributorToken contributorToken = new ContributorToken(
            to,
            _name,
            _symbol,
            _nbTokens
        );
        ContributorTokenArray.push(contributorToken);
    }

    function gfSetter(uint256 _contributorTokenIndex, uint256 _nbTokens)
        public
    {
        ContributorToken(address(ContributorTokenArray[_contributorTokenIndex]))
            ._createRatingTokens(_nbTokens);
    }

    function gfGetter(address to, uint256 _contributorTokenIndex)
        public
        returns (string memory)
    {
        return
            ContributorToken(
                address(ContributorTokenArray[_contributorTokenIndex])
            )._transferContributorToken(to);
    }
}
