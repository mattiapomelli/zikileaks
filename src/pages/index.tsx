import React from "react";

import { Hero } from "../components/landing/hero/hero";
import { NewsFeed } from "../components/landing/news-feed";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Hero title={"Privacidade e Segurança"} />
      <NewsFeed />
    </>
  );
};

export default Home;
