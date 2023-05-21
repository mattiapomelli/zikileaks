import hre, { ethers } from 'hardhat';
import { getDeploymentAddress } from '../../.deployment/deploymentManager';
import uploadToIPFS from '../../utils/uploadToIpfs';
import { ETH_ADDRESS, MintStatus } from '../../utils/constants';

async function main() {
  const network = hre.network.name;
  console.log('Network:', network);

  const [deployer, alice, bob, carol] = await ethers.getSigners();

  // Get contract
  const knowledgeLayerID = await ethers.getContractAt(
    'KnowledgeLayerID',
    getDeploymentAddress(network, 'KnowledgeLayerID'),
  );

  const knowledgeLayerPlatformID = await ethers.getContractAt(
    'KnowledgeLayerPlatformID',
    getDeploymentAddress(network, 'KnowledgeLayerPlatformID'),
  );

  const knowledgeLayerCourse = await ethers.getContractAt(
    'KnowledgeLayerCourse',
    getDeploymentAddress(network, 'KnowledgeLayerCourse'),
  );

  // Whitelist Carol and mint Platform ID
  await knowledgeLayerPlatformID.connect(deployer).whitelistUser(carol.address);
  await knowledgeLayerPlatformID.connect(carol).mint('carol-platform');

  console.log(`Minted Platform ID`);

  // Disable whitelist for reserved handles and mint IDs
  await knowledgeLayerID.connect(deployer).updateMintStatus(MintStatus.PUBLIC);
  await knowledgeLayerID.connect(alice).mint(0, 'alice');
  await knowledgeLayerID.connect(bob).mint(0, 'bob__');

  console.log(`Minted Profile IDs`);

  // Create courses
  const courses = [
    {
      user: bob,
      platformId: 1,
      price: ethers.utils.parseEther('0.01'),
      data: {
        title: 'How to win N&W S3 and make 100K: Complete Guide',
        description:
          'Discover all the secrets and strategies to become the best builder of all times and win N&W S3 and make 100K. Easily.',
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/win-nw-cover.png',
        videoPlaybackId: '23a3cbtb7lwmuoy8',
      },
    },
    {
      user: alice,
      platformId: 1,
      price: ethers.utils.parseEther('0.08'),
      data: {
        title: 'How To Create Ebooks With Chat GPT: Beginner’s Guide',
        description:
          "The course explains the process of creating an e-book in a short amount of time using chatGPT, a tool that allows users to generate ideas and outlines for various types of writing. It demonstrate how to use the tool to generate ideas for a non-fiction e-book and provide an outline for a beginner's guide to smartphone camera videography.",
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/chatgpt-ebooks-cover.png',
        videoPlaybackId: 'a18b6p48yx71ivud',
      },
    },
    {
      user: alice,
      platformId: 1,
      price: ethers.utils.parseEther('0.027'),
      data: {
        title: 'Guide to become a professional meme maker',
        description:
          "Learn how to leave your job and become a full-time meme maker. Learn the skills that you need to get a job as Chief Meme Officer at the top companies in the world. You'll discover how to create memes that go viral, and how to get paid to create memes.",
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/meme-maker-cover.png',
        videoPlaybackId: 'bf667yp4e9xeoek7',
      },
    },
    {
      user: bob,
      platformId: 1,
      price: ethers.utils.parseEther('0.03'),
      data: {
        title: 'Twitter Marketing: How to Grow an Audience on Twitter Fast',
        description:
          "Understand why Twitter is the perfect marketing and audience-building platform. And specifically how you can grow an audience on the platform fast. You'll discover several Twitter growth hacks that can help you to get a quick start on the platform, and will help you to build your audience fast. By the end of the course you'll know how to leverage Twitter to grow an engaged audience.",
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/twitter-marketing-cover.png',
        videoPlaybackId: '2258oyx8errp4abc',
      },
    },
    {
      user: bob,
      platformId: 1,
      price: ethers.utils.parseEther('0.05'),
      data: {
        title: 'Ethereum Smart Contract Engineer: Complete Course',
        description:
          'How do you become an Ethereum smart contract engineer? What skills do I need? Where do find jobs? What online resources do I use? Here is what you need to know.',
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/smart-contract-dev-cover.png',
        videoPlaybackId: '85f5y6aygrxlmhxn',
      },
    },
    {
      user: bob,
      platformId: 1,
      price: ethers.utils.parseEther('0.044'),
      data: {
        title: 'How to build work marketplaces on TalentLayer',
        description:
          'Learn how to build web3 work platform using TalentLayer, the low-level protocol for work. Build freelance marketplaces, job boards, ride-sharing apps, and more.',
        image:
          'https://yvgbeqzuvfqmewtltglq.supabase.co/storage/v1/object/public/public/tl-workshop-cover.png',
        videoPlaybackId: 'a403c5g06g8ovv72',
      },
    },
  ];

  for (const course of courses) {
    const { user, price, data, platformId } = course;

    const dataUri = await uploadToIPFS(data);
    if (!dataUri) throw new Error('Failed to upload to IPFS');

    const profileId = await knowledgeLayerID.ids(user.address);

    const tx = await knowledgeLayerCourse
      .connect(user)
      .createCourse(profileId, platformId, price, ETH_ADDRESS, dataUri);
    await tx.wait();
  }

  console.log(`Created courses`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
