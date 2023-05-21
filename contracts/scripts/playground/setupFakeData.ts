import hre, { ethers } from 'hardhat';
import { getDeploymentAddress } from '../../.deployment/deploymentManager';
import uploadToIPFS from '../../utils/uploadToIpfs';

async function main() {
  const network = hre.network.name;
  console.log('Network:', network);

  const [, alice, bob, carol, dave] = await ethers.getSigners();

  // Get contract
  const knowledgeLayerCourse = await ethers.getContractAt(
    'KnowledgeLayerCourse',
    getDeploymentAddress(network, 'KnowledgeLayerCourse'),
  );

  // Upload course data to IPFS
  const courses = [
    {
      signer: alice,
      price: ethers.utils.parseEther('0.00000001'),
      metadata: {
        title: 'Web3 Development 101',
        description:
          'This course will teach you the basics of web3 development. You will learn how to build a simple smart contract and how to interact with it using a web3 provider.',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, velit rerum reprehenderit natus omnis eligendi iure amet fugit assumenda cumque id ad qui quos alias odit iusto provident. Nostrum accusamus quae iure quod maiores!',
        imageUrl:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/smart-contract-dev-cover.png',
        keywords: ['web3', 'solidity'],
        videoPlaybackId: '85f5y6aygrxlmhxn',
      },
    },
  ];

  for (const course of courses) {
    const { signer, price, metadata } = course;

    // Upload data to IPFS
    const dataUri = await uploadToIPFS(metadata);
    if (!dataUri) throw new Error('Failed to upload to IPFS');

    // Create course
    const tx = await knowledgeLayerCourse.connect(signer).createCourse(price, dataUri);
    const receipt = await tx.wait();

    const id = receipt.events?.find((e) => e.event === 'CourseCreated')?.args?.courseId;
    console.log('Created new course with id: ', id);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
