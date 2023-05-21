import { NextPage } from "next";

import { Hero } from "../components/landing/hero/hero";
import Link from "next/link";

function Home() {
  return (
    <>

      <section className='text-gray-700 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-primary'>
            Zikileaks helps advocates get sensitive documents published without fear. 
            </h1>
            <p className='mb-8 text-white text-2xl leading-relaxed'>
              Privacy-preserving posting, non-invasive content verification, & anonymous donations empower whistleblowers to fight for human rights globally. 
            </p>
            <div className='flex justify-center'>
            <Link className='ml-4 inline-flex border-0 btn-secondary py-2 px-6 focus:outline-none rounded text-lg' href='/news'>
                Read Recent Posts
              </Link>
              <Link className='ml-4 inline-flex border-0 btn-primary py-2 px-6 focus:outline-none rounded text-lg' href='/verification'>
                Post Leaked Documents
              </Link>
            </div>
          </div>
          <div className=''>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/zikihome.png'></img>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-10'>
            <h1 className='sm:text-3xl text-3xl mb-5 font-medium title-font text-white'>
            Whistleblowers, Civilians, and Donors
            </h1>
            <h2 className='text-s text-primary tracking-widest font-medium title-font mb-0'>
              Uniting to create a more open ecosystem for public information
            </h2>
          </div>
          <div className='flex flex-wrap -m-4'>
            
            <div className='p-4 md:w-1/3'>
              <div className='flex  shadow-2xl rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-gray-100 flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
                      <circle cx='12' cy='7' r='4'></circle>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    For Subject Matter Experts
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                  Zikileaks leverage knowledge of the crowd and zero-knowledge employment verification to validate documents as authentic. Experts and citizens alike can contribute to curation and validation of leaked documents. Do you have what it takes? Become a curator. 
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex shadow-2xl rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-gray-100 flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <circle cx='6' cy='6' r='3'></circle>
                      <circle cx='6' cy='18' r='3'></circle>
                      <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>For Whistleblowers</h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                  Zikileaks empowers advocates to release leaked documents on civil liberties and human rights violations without fear of being personally targeted. This is possible thanks to...</p>
                  <ul>
                    <li>⭐ privacy-preserving content posting with Railgun and Lens</li>
                    <li>⭐ non-invasive content verification with Sismo</li>
                    <li>⭐ anon donations with Railgun</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex shadow-2xl rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-gray-100 flex-shrink-0'>
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'>
                      <circle cx='6' cy='6' r='3'></circle>
                      <circle cx='6' cy='18' r='3'></circle>
                      <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>For Supporters</h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                  Zikileaks is a non-intermediary media project that enables whistleblowers to submit documents and accept donations in a peer-to-peer and private way. When you read and donate on Zikileaks, you are enabling a generation of advocates to continue doing their work - safe from the people that aim to stop them.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 shadow-2xl body-font bg-secondary rounded-md border-t'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-0 lg:mb-0 '>
            <img
              className='p-10 object-center'
              alt='hero'
              src='/frens.png'></img>
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-4xl title-font pb-10 font-medium mb-3'>
                  Reach Larger Audiences with Lens 🌿
                </h2>
                <p className='leading-relaxed text-xl text-base'>
                Whistleblowers are constantly censored and one of the hardest issues to overcome is getting your documents where people can see them. <br></br><br></br>Thanks to Lens Protocol’s network of interoperable social platforms, once your content is approved, it’s distributed across dozens of social media platforms automatically. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
            <h1 className='sm:text-5xl text-5xl font-medium title-font mb-2 text-gray-100'>
              Proudly Built With
            </h1>
          </div>
          <div className='flex flex-wrap -m-4'>
            
            <div className='p-4 md:w-1/3'>
              <div className='flex  shadow-2xl rounded-lg h-full bg-gray-100 p-8 flex-col'>
              <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0'
                  src='/sismo.png'></img>
                  <h2 className='text-gray-900 text-center pt-10 text-3xl title-font fo1t-medium'>Sismo</h2>
                  <h2 className='text-gray-900 pt-5 text-lg title-font font-medium'>Sismo enables whistleblowers to verify their employers privately</h2>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex  shadow-2xl rounded-lg h-full bg-gray-100 p-8 flex-col'>
              <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0'
                  src='/railgun.png'></img>
                  <h2 className='text-gray-900 text-center pt-10 text-3xl title-font fo1t-medium'>Railgun</h2>
                  <h2 className='text-gray-900 pt-5 text-lg title-font font-medium'>Railgun enables private peer-to-peer donations and private content posting</h2>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex  shadow-2xl h-full bg-gray-100 p-8 flex-col'>
              <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0'
                  src='/lens.png'></img>
                  <h2 className='text-gray-900 text-center pt-10 text-3xl title-font fo1t-medium'>Lens Protocol</h2>
                  <h2 className='text-gray-900 pt-5 text-lg title-font font-medium'>Lens enables content posting and distribution across platforms</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-black shadow-2xl rounded-md bg-secondary body-font border-t border-gray-200'>
        <div className='container  py-10 mx-auto'>
          <div className='flex flex-col text-center w-full mb-10'>
            <h1 className='sm:text-5xl text-5xl font-medium title-font mb-4 text-black'>
              Our Team
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              We're passionate as privacy as a human right and are building tools to make this vision a reality.
            </p>
          </div>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full border-white shadow-2xl flex items-center border-8 p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://img.freepik.com/premium-photo/cartoon-ninja-girl-beautiful-japanese-ninja-girl-concept-art-digital-painting-fantasy-illustration_743201-2848.jpg?w=2000'></img>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 title-font font-medium'>Secret Soheimam</h2>
                  <p className='text-primary-500'>Fancy Frontend Officer</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full border-white shadow-2xl flex items-center border-8 p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/633a2327-57a8-4012-bd41-a98836b26238/dewltnz-f2e682de-c6dd-4673-8242-81ca1fc54ae5.jpg/v1/fill/w_1280,h_1280,q_75,strp/anime_girl___ninja___kunoichi_by_allydity2412_dewltnz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzYzM2EyMzI3LTU3YTgtNDAxMi1iZDQxLWE5ODgzNmIyNjIzOFwvZGV3bHRuei1mMmU2ODJkZS1jNmRkLTQ2NzMtODI0Mi04MWNhMWZjNTRhZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SmebuLvHfK7MnFqdlR2P71ukZgKmiMiY2s_FU94RXTk'></img>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 title-font font-medium'>Kinda Anonymous Kirsten</h2>
                  <p className='text-primary-500'>Sismo Supercoder</p>
                </div>
              </div>
            </div>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full border-white shadow-2xl flex items-center border-8 p-4 rounded-lg'>
                <img
                  alt='team'
                  className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                  src='https://narutoguides.com/wp-content/uploads/2018/03/Masked-Man.png'></img>
                <div className='flex-grow'>
                  <h2 className='text-gray-900 title-font font-medium'>Mystery Mattia</h2>
                  <p className='text-primary-500'>Railgun Representative & Lens  Lieutenant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font border-t border-gray-200'>
        <div className='container pt-20 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/github.png'></img>
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-gray-100 text-5xl title-font font-medium mb-3'>
                  View on Github
                </h2>
                <p className='leading-relaxed text-gray-100 text-base'>
                  Our code is fully open-source and we'd love your feedback!
                </p>
                <div className='pt-8'>
                <Link className='inline-flex border-0 btn-primary py-2 px-6 focus:outline-none rounded text-lg' target='_blank' href='https://github.com/mattiapomelli/zikileaks'>
                Post Leaked Documents
              </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

