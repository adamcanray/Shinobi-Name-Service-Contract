// const main = async () => {
//   //   const [owner, randomPerson] = await hre.ethers.getSigners();
//   //   const domainContractFactory = await hre.ethers.getContractFactory("Domains");
//   //   const domainContract = await domainContractFactory.deploy();
//   //   await domainContract.deployed();
//   //   console.log("Contract deployed to:", domainContract.address);
//   //   console.log("Contract deployed by:", owner.address);

//   //   const txn = await domainContract.register("doom");
//   //   await txn.wait();

//   //   const domainOwner = await domainContract.getAddress("doom");
//   //   console.log("Owner of domain:", domainOwner);

//   //   // Trying to set a record that doesn't belong to me!
//   //   txn = await domainContract
//   //     .connect(randomPerson)
//   //     .setRecord("doom", "Haha my domain now!");
//   //   await txn.wait();

//   const domainContractFactory = await hre.ethers.getContractFactory("Domains");
//   // We pass in "sarutobi" to the constructor when deploying
//   const domainContract = await domainContractFactory.deploy("sarutobi");
//   await domainContract.deployed();

//   console.log("Contract owner:", owner.address);
//   console.log("Contract deployed to:", domainContract.address);

//   // We're passing in a second variable - value. This is the moneyyyyyyyyyy
//   let txn = await domainContract.register("dadang", {
//     value: hre.ethers.utils.parseEther("0.1"),
//   });
//   await txn.wait();

//   const address = await domainContract.getAddress("dadang");
//   console.log("Owner of domain dadang:", address);

//   const balance = await hre.ethers.provider.getBalance(domainContract.address);
//   console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
// };

const main = async () => {
  const [owner, superCoder] = await hre.ethers.getSigners();
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("sarutobi");
  await domainContract.deployed();

  console.log("Contract owner:", owner.address);

  // Let's be extra generous with our payment (we're paying more than required)
  let txn = await domainContract.register("unang", {
    value: hre.ethers.utils.parseEther("1234"),
  });
  await txn.wait();

  // How much money is in here?
  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));

  // Quick! Grab the funds from the contract! (as superCoder)
  try {
    txn = await domainContract.connect(superCoder).withdraw();
    // txn = await domainContract.connect(owner).withdraw();
    await txn.wait();
  } catch (error) {
    console.log("Could not rob contract", error);
  }

  // Let's look in their wallet so we can compare later
  let ownerBalance = await hre.ethers.provider.getBalance(owner.address);
  console.log(
    "Balance of owner before withdrawal:",
    hre.ethers.utils.formatEther(ownerBalance)
  );

  // Oops, looks like the owner is saving their money!
  txn = await domainContract.connect(owner).withdraw();
  await txn.wait();

  // Fetch balance of contract & owner
  const contractBalance = await hre.ethers.provider.getBalance(
    domainContract.address
  );
  ownerBalance = await hre.ethers.provider.getBalance(owner.address);

  console.log(
    "Contract balance after withdrawal:",
    hre.ethers.utils.formatEther(contractBalance)
  );
  console.log(
    "Balance of owner after withdrawal:",
    hre.ethers.utils.formatEther(ownerBalance)
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
