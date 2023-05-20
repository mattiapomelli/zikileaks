import { NextPage } from "next";

import { Hero } from "../components/landing/hero/hero";

function Home() {
  return (
    <>

      <section className='text-gray-700 body-font'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-primary'>
            Zikileaks helps advocates get sensitive documents published without fear of backlash. 
            </h1>
            <p className='mb-8 text-white text-2xl leading-relaxed'>
              Privacy-preserving posting, non-invasive content verification, & anonymous donations empower whistleblowers to fight for human rights globally. 
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex border-0 btn-secondary py-2 px-6 focus:outline-none rounded text-lg'>
                Read Recent Posts
              </button>
              <button className='ml-4 inline-flex border-0 btn-primary py-2 px-6 focus:outline-none rounded text-lg'>
                Contribute to Curation
              </button>
            </div>
          </div>
          <div className='lg:max-w-lg lg:w-full'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/zikihome.svg'></img>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h2 className='text-xs text-green-500 tracking-widest font-medium title-font mb-1'>
              Uniting Whistleblowers, Civilians, and Donors to Free Information
            </h2>
            <h1 className='sm:text-3xl text-2xl font-medium title-font text-white'>
            Whistleblowers, Civilians, and Donors
            </h1>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0'>
                    <svg fill='none' stroke='currentColor' className='w-5 h-5' viewBox='0 0 24 24'>
                      <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg title-font font-medium'>
                    Publicize DAO Votes
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    Trying to rally your community to vote on key initiatives? Ask influencers for
                    help spreading the word.
                  </p>
                  <a className='mt-3 text-green-500 inline-flex items-center'>
                    Post a Sponsorship Opportnity
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'>
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0'>
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
                    Sell Your Product
                  </h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    Reach out to niche clothing, sports, beauty, nomad, and other influencers. Sell
                    products with hyper-targeted influencer marketing.
                  </p>
                  <a className='mt-3 text-green-500 inline-flex items-center'>
                    Post a Sponsorship Opportnity
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'>
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
                <div className='flex items-center mb-3'>
                  <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0'>
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
                  <h2 className='text-gray-900 text-lg title-font font-medium'>Organizations</h2>
                </div>
                <div className='flex-grow'>
                  <p className='leading-relaxed text-base'>
                    Publicize social good causes by tapping into influencer's audiences. Grow your
                    movement alongside loyal followers.
                  </p>
                  <a className='mt-3 text-green-500 inline-flex items-center'>
                    Post a Sponsorship Opportnity
                    <svg
                      fill='none'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      className='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'>
                      <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font bg-secondary border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='images/influencer-1.webp'></img>
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-gray-900 text-2xl title-font font-medium mb-3'>
                  🌿 Better Reach with Lens Protocol 🌿
                </h2>
                <p className='leading-relaxed text-base'>
                  Lorem ipsum. Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum. Lorem ipsum. Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum. Lorem ipsum. Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.Lorem ipsum.
                </p>
                <a className='mt-3 text-green-500 inline-flex items-center'>View Recent Posts</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 body-font border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center'>
            <h1 className='sm:text-5xl text-5xl font-medium title-font mb-2 text-white'>
              Proudly Built With
            </h1>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border p-6 rounded-lg'>
                <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0 mr-4 h-40'
                  src='/sismo.png'></img>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border p-6 rounded-lg'>
                <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0 mr-4 h-40'
                  src='/railgun.png'></img>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border  p-6 rounded-lg'>
                <img
                  alt='team'
                  className=' object-cover object-center flex-shrink-0 mr-4 h-40'
                  src='/lens.png'></img>
              </div>
            </div>
            <div className='xl:w-1/3 md:w-1/2 p-4'>
              <div className='border p-6 rounded-lg'>
                <img
                  alt='team'
                  className=' object-cover w-100 object-center flex-shrink-0 mr-4'
                  src='/polygon.png'></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='text-gray-700 bg-secondary body-font border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-5xl text-5xl font-medium title-font mb-4 text-gray-900'>
              Our Team
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              We're passionate as privacy as a human right and are building tools to make this vision a reality.
            </p>
          </div>
          <div className='flex flex-wrap -m-2'>
            <div className='p-2 lg:w-1/3 md:w-1/2 w-full'>
              <div className='h-full border-secondary flex items-center border p-4 rounded-lg'>
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
              <div className='h-full flex items-center border-secondary border p-4 rounded-lg'>
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
              <div className='h-full flex border-secondary items-center border p-4 rounded-lg'>
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
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src='/github.png'></img>
          </div>
          <div className='flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='text-white text-5xl title-font font-medium mb-3'>
                  View on Github
                </h2>
                <p className='leading-relaxed text-primary text-base'>
                  Our code is fully open-source and we'd love your feedback!
                </p>
                <a className='flex mx-auto mt-16 btn-primary border-0 py-2 px-8 focus:outline-none rounded text-lg' href='https://github.com/mattiapomelli/zikileaks' target='_blank'>
                  View on Github
                </a>
              </div>
            </div>
          </div>
          P
        </div>
      </section>
      <Hero
        title={
          "Privacy, like the armored shell of an armadillo, is not about hiding something. It's about being able to control how we present ourselves to the world."
        }
      />
      <a
        href='https://github.com/InfluLenser'
        className='rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border'
        target='_blank'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'>
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
        </svg>
      </a>
    </>
  );
}

export default Home;

