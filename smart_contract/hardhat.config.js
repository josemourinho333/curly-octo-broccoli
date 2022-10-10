// https://eth-goerli.g.alchemy.com/v2/ME503peK1NhN-lX4OFti36iPGA_k7ZDa

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ME503peK1NhN-lX4OFti36iPGA_k7ZDa',
      accounts: [ '180c6e95879d59357f9cb1db6a4cb1b8b7bf5f7dd3e24a640bd70622ad0ea087' ]
    }
  }
}
