require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

const privateKey = process.env.DEVWALLET;
const url = process.env.ALCHEMY;
const etherscan = process.env.ETHERSCAN;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mainnet: {
      url: `${url}`,
      accounts: [`${privateKey}`],
      live: true,
      saveDeployments: true,
      tags: ["production"],
    },
    xdai: {
      url: `https://rpc.gnosischain.com/`,
      accounts: [`${privateKey}`],
      live: true,
      saveDeployments: true,
      tags: ["staging"],
    },
  },
  etherscan: {
    apiKey: {
      mainnet: etherscan,
      xdai: "apikey",
    },
  },
  mocha: {
    timeout: 600000,
  },
};
