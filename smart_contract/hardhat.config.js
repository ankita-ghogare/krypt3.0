require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: import.meta.env.ROPSTEN_URL ,
      accounts: [import.meta.env.ROPSTEN_ACCOUNT_PRIVATE_KEY]
    }
  }
}