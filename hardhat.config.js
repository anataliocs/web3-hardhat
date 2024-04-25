require("@nomicfoundation/hardhat-toolbox");

const { vars } = require("hardhat/config");

const TEST_API_KEY = vars.get("TEST_API_KEY");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${TEST_API_KEY}`
    },
  },
  solidity: {
    version: "0.8.24"
  }
};

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address);
  }

});