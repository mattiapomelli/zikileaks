import { NextPage } from "next";

import { Hero } from "../components/landing/hero/hero";

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title={
          "Privacy, like the armored shell of an armadillo, is not about hiding something. It's about being able to control how we present ourselves to the world"
        }
      />
      <div className="grid grid-cols-12 text-center">
        <p className="col-span-8 col-start-3 my-24 text-accent">
          Join ZikiLeaks Embrace Truth and Accountability! Be part of our
          transparent information sharing platform for a better world. Share
          your voice, insights, and experiences. Together, we make a difference!
        </p>
      </div>
    </>
  );
};

export default Home;
