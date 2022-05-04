var myToken = artifacts.require("MyToken.sol");

module.exports = async function(deployer) {
  await deployer.deploy(myToken, 1000000);
}