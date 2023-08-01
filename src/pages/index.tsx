import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <>
      <section className=" text-gray-700">
        <div className="rounded-box bg-warning/30 p-4 text-center text-white">
          ⚠️ This is a hackathon project. It is not intended for actual use ⚠️
        </div>
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:grow lg:pr-24">
            <h1 className=" mb-4 text-3xl font-medium text-primary sm:text-4xl">
              Zikileaks helps advocates get sensitive documents published
              without fear.
            </h1>
            <p className="mb-8 text-2xl leading-relaxed text-white">
              Privacy-preserving posting, non-invasive content verification, &
              anonymous donations empower whistleblowers to fight for human
              rights globally.
            </p>
            <div className="flex justify-center">
              <Link
                className=" btn-secondary ml-4 inline-flex rounded border-0 px-6 py-2 text-lg focus:outline-none"
                href="/feed"
              >
                Read Recent Posts
              </Link>
              <Link
                className="btn-primary ml-4 inline-flex rounded border-0 px-6 py-2 text-lg focus:outline-none"
                href="/verification"
              >
                Post Leaked Documents
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              className="rounded object-cover object-center"
              alt="hero"
              src="/zikihome.png"
              width={202}
              height={250}
            />
          </div>
        </div>
      </section>
      <section className=" border-t border-gray-200 text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-10 flex w-full flex-col text-center">
            <h1 className=" mb-5 text-3xl font-medium text-white sm:text-3xl">
              Whistleblowers, Civilians, and Donors
            </h1>
            <h2 className="  mb-0 font-medium tracking-widest text-primary">
              Uniting to create a more open ecosystem for public information
            </h2>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="flex  h-full flex-col rounded-lg bg-gray-100 p-8 shadow-2xl">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-gray-100">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className=" text-lg font-medium text-gray-900">
                    For Subject Matter Experts
                  </h2>
                </div>
                <div className="grow">
                  <p className="text-base leading-relaxed">
                    Zikileaks leverage knowledge of the crowd and zero-knowledge
                    employment verification to validate documents as authentic.
                    Experts and citizens alike can contribute to curation and
                    validation of leaked documents. Do you have what it takes?
                    Become a curator.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8 shadow-2xl">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-gray-100">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className=" text-lg font-medium text-gray-900">
                    For Whistleblowers
                  </h2>
                </div>
                <div className="grow">
                  <p className="text-base leading-relaxed">
                    Zikileaks empowers advocates to release leaked documents on
                    civil liberties and human rights violations without fear of
                    being personally targeted. This is possible thanks to...
                  </p>
                  <ul>
                    <li>
                      ⭐ privacy-preserving content posting with Railgun and
                      Lens
                    </li>
                    <li>⭐ non-invasive content verification with Sismo</li>
                    <li>⭐ anon donations with Railgun</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8 shadow-2xl">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-gray-100">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className=" text-lg font-medium text-gray-900">
                    For Supporters
                  </h2>
                </div>
                <div className="grow">
                  <p className="text-base leading-relaxed">
                    Zikileaks is a non-intermediary media project that enables
                    whistleblowers to submit documents and accept donations in a
                    peer-to-peer and private way. When you read and donate on
                    Zikileaks, you are enabling a generation of advocates to
                    continue doing their work - safe from the people that aim to
                    stop them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" rounded-md border-t bg-accent text-gray-700 shadow-2xl">
        <div className="container mx-auto flex flex-wrap px-5 py-24">
          <div className="mb-0 w-full lg:mb-0 lg:w-1/2 ">
            <img
              className="object-center p-10"
              alt="hero"
              src="/frens.png"
            ></img>
          </div>
          <div className=" -mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="grow">
                <h2 className=" mb-3 pb-10 text-4xl font-medium text-gray-900">
                  Reach Larger Audiences with Lens 🌿
                </h2>
                <p className="text-base leading-relaxed">
                  Whistleblowers are constantly censored and one of the hardest
                  issues to overcome is getting your documents where people can
                  see them. <br></br>
                  <br></br>Thanks to Lens Protocol’s network of interoperable
                  social platforms, once your content is approved, it’s
                  distributed across dozens of social media platforms
                  automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" border-t border-gray-200 text-gray-700">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
            <h1 className=" mb-2 text-5xl font-medium text-gray-100 sm:text-5xl">
              Proudly Built With
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="flex  h-full flex-col rounded-lg bg-gray-100 p-8 shadow-2xl">
                <img
                  alt="team"
                  className=" shrink-0 object-cover object-center"
                  src="/sismo.png"
                ></img>
                <h2 className=" fo1t-medium pt-10 text-center text-3xl text-gray-900">
                  Sismo
                </h2>
                <h2 className=" pt-5 text-lg font-medium text-gray-900">
                  Sismo enables whistleblowers to verify their employers
                  privately
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex  h-full flex-col rounded-lg bg-gray-100 p-8 shadow-2xl">
                <img
                  alt="team"
                  className=" shrink-0 object-cover object-center"
                  src="/railgun.png"
                ></img>
                <h2 className=" fo1t-medium pt-10 text-center text-3xl text-gray-900">
                  Railgun
                </h2>
                <h2 className=" pt-5 text-lg font-medium text-gray-900">
                  Railgun enables private peer-to-peer donations and private
                  content posting
                </h2>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex  h-full flex-col bg-gray-100 p-8 shadow-2xl">
                <img
                  alt="team"
                  className=" shrink-0 object-cover object-center"
                  src="/lens.png"
                ></img>
                <h2 className=" fo1t-medium pt-10 text-center text-3xl text-gray-900">
                  Lens Protocol
                </h2>
                <h2 className=" pt-5 text-lg font-medium text-gray-900">
                  Lens enables content posting and distribution across platforms
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" rounded-md border-t border-gray-200 bg-accent text-black shadow-2xl">
        <div className="container  mx-auto py-10">
          <div className="mb-10 flex w-full flex-col text-center">
            <h1 className=" mb-4 text-5xl font-medium text-black sm:text-5xl">
              Our Team
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              We&apos;re passionate as privacy as a human right and are building
              tools to make this vision a reality.
            </p>
          </div>
          <div className="-m-2 flex flex-wrap">
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="flex h-full items-center rounded-lg border-8 border-white p-4 shadow-2xl">
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src="https://img.freepik.com/premium-photo/cartoon-ninja-girl-beautiful-japanese-ninja-girl-concept-art-digital-painting-fantasy-illustration_743201-2848.jpg?w=2000"
                ></img>
                <div className="grow">
                  <h2 className=" font-medium text-gray-900">
                    Secret Soheimam
                  </h2>
                  <p className="text-primary-500">Fancy Frontend Officer</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="flex h-full items-center rounded-lg border-8 border-white p-4 shadow-2xl">
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/633a2327-57a8-4012-bd41-a98836b26238/dewltnz-f2e682de-c6dd-4673-8242-81ca1fc54ae5.jpg/v1/fill/w_1280,h_1280,q_75,strp/anime_girl___ninja___kunoichi_by_allydity2412_dewltnz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzYzM2EyMzI3LTU3YTgtNDAxMi1iZDQxLWE5ODgzNmIyNjIzOFwvZGV3bHRuei1mMmU2ODJkZS1jNmRkLTQ2NzMtODI0Mi04MWNhMWZjNTRhZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.SmebuLvHfK7MnFqdlR2P71ukZgKmiMiY2s_FU94RXTk"
                ></img>
                <div className="grow">
                  <h2 className=" font-medium text-gray-900">
                    Kinda Anonymous Kirsten
                  </h2>
                  <p className="text-primary-500">Sismo Supercoder</p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/2 lg:w-1/3">
              <div className="flex h-full items-center rounded-lg border-8 border-white p-4 shadow-2xl">
                <img
                  alt="team"
                  className="mr-4 h-16 w-16 shrink-0 rounded-full bg-gray-100 object-cover object-center"
                  src="https://narutoguides.com/wp-content/uploads/2018/03/Masked-Man.png"
                ></img>
                <div className="grow">
                  <h2 className=" font-medium text-gray-900">Mystery Mattia</h2>
                  <p className="text-primary-500">
                    Railgun Representative & Lens Lieutenant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" border-t border-gray-200 text-gray-700">
        <div className="container mx-auto flex flex-wrap pt-20">
          <div className="mb-10 w-full overflow-hidden rounded-lg lg:mb-0 lg:w-1/2">
            <img
              className="rounded object-cover object-center"
              alt="hero"
              src="/github.png"
            ></img>
          </div>
          <div className="-mb-10 flex flex-col flex-wrap text-center lg:w-1/2 lg:py-6 lg:pl-12 lg:text-left">
            <div className="mb-10 flex flex-col items-center lg:items-start">
              <div className="grow">
                <h2 className=" mb-3 text-5xl font-medium text-gray-100">
                  View on Github
                </h2>
                <p className="text-base leading-relaxed text-gray-100">
                  Our code is fully open-source and we&apos;d love your
                  feedback!
                </p>
                <div className="pt-8">
                  <Link
                    className="btn-primary inline-flex rounded border-0 px-6 py-2 text-lg focus:outline-none"
                    target="_blank"
                    href="https://github.com/mattiapomelli/zikileaks"
                  >
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
