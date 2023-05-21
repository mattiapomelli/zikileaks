import React from "react";

import { Container } from "@components/layout/container";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex  items-center justify-center border-t border-base-300/50 py-6 text-sm">
          <img
            alt="team"
            className="mr-4 h-20 w-20 shrink-0 object-cover  object-center"
            src="/ziki-roll.png"
          ></img>
        </div>
      </Container>
    </footer>
  );
};
