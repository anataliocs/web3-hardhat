
// Run script with `npx hardhat run scripts/withdrawl.js`. 
const hre = require("hardhat");

async function main() {

  const lock = await hre.ethers.getContractFactory("Lock");

  // Connect to the deployed contract
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contract = lock.attach(contractAddress);

  // Display deployment info
  console.log("Contract Deployed at Address: ", contract.address);

  const transaction = await contract.withdraw();

  const transactionReceipt = await transaction.wait();

  console.log(transactionReceipt);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
