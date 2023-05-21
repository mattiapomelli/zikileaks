import { task } from 'hardhat/config';

import { setDeploymentAddress } from '../../.deployment/deploymentManager';
import { verifyAddress } from '../../utils/verifyAddress';

task('deploy', 'Deploy all contracts')
  .addFlag('verify', 'verify contracts on etherscan')
  .setAction(async (args, { ethers, network }) => {
    const { verify } = args;
    console.log('Network:', network.name);

    const [deployer] = await ethers.getSigners();
    console.log('Using address: ', deployer.address);

    const balance = await ethers.provider.getBalance(deployer.address);
    console.log('Balance: ', ethers.utils.formatEther(balance));

    // Deploy ZikiLeaks
    const ZikiLeaks = await ethers.getContractFactory('ZikiLeaks');
    const zikiLeaks = await ZikiLeaks.deploy();
    await zikiLeaks.deployed();

    if (verify) {
      await verifyAddress(zikiLeaks.address);
    }

    console.log('Deployed ZikiLeaks at', zikiLeaks.address);
    setDeploymentAddress(network.name, 'ZikiLeaks', zikiLeaks.address);
  });
