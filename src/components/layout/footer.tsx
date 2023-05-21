import React from "react";

import { Container } from "@components/layout/container";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex  items-center justify-center border-t border-base-300/50 py-6 text-sm">
                  <img
                  alt='team'
                  className='w-20 h-20 object-cover object-center flex-shrink-0  mr-4'
                  src='/ziki-roll.png'>
                  </img>

        </div>
      </Container>
    </footer>
  );
};
