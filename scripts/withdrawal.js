const hre = require("hardhat");

async function main() {

    //Invokes hardhat runtime env
    const lock = await hre.ethers.getContractFactory("Lock");

    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

    const contract = lock.attach(contractAddress);

    console.log("Contract deployed at Address: ", contract.address);

    const transaction = await contract.withdraw();

    const transactionReceipt = await transaction.wait();

    console.log(transactionReceipt);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});