import React from "react";

import { NewsFeed } from "@components/landing/news-feed";
import { PublicationForm } from "@components/publication/publication-form";
import { PublicationFormText } from "@components/publication/uploadFormText";

import type { NextPage } from "next";

const Publication: NextPage = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <PublicationFormText
            title={"Would you like to submit a report?"}
            description={
              "By submitting reports to ZikiLeaks, you become an integral part of this movement towards a more open and just society. Your voice matters, and we encourage you to share your insights, knowledge, and experiences. Together, we can make a difference!"
            }
          />
          <PublicationForm />
        </div>
        <div className="col-span-1">
          <NewsFeed />
        </div>
      </div>
    </>
  );
};

export default Publication;
