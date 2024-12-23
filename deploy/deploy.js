const hre = require("hardhat")

async function main() {
    const Vdrive = await hre.ethers.getContractFactory("Vdrive");
    const vdrive = await Vdrive.deploy();
    await vdrive.deployed();
    console.log("Vdrive deployed to:", vdrive.address);
}
main().catch((error)=>{
    console.error(error);
    process.exitCode = 1;
});