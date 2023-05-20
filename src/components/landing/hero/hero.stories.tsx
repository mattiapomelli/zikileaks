// Hero.stories.tsx
import { Story } from "@storybook/react";
import React from "react";

import { Hero, HeroProps } from "@components/landing/hero";

export default {
  title: "Components/Hero",
  component: Hero,
} as const;

const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Default: Story<HeroProps> = Template.bind({});
Default.args = {
  title: "Welcome to the Hero Component",
};
