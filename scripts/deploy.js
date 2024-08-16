const { ethers } = require("hardhat");

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying Contract ...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  console.log(`========================== simpleStorageFactory`);
  console.log(simpleStorage);
  const doneDeployawait = await simpleStorage.waitForDeployment();
  console.log(`========================== waitForDeployment`);
  console.log(doneDeployawait);
  console.log("Doneee ...");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
