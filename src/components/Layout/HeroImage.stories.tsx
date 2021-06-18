import { Story, Meta } from "@storybook/react";
import HeroImage, { Props } from "./HeroImage";

export default {
  title: "Layout/HeroImageWithTitle",
  component: HeroImage,
  parameters: {
    componentSubtitle: "Displays an Image, a title and a subtitle",
  },
} as Meta;

const Template: Story<Props> = (args) => <HeroImage {...args} />;

export const Departments = Template.bind({});
Departments.args = {
  image: {
    url: "https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1090&q=80",
  },
  title: "Abteilungen des TSV Paunzhausen",
  subtitle: "602 Mitglieder",
};

export const Department = Template.bind({});
Department.args = {
  image: {
    url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  title: "Abteilung Tennis",
  subtitle: "69 Mitglieder",
};

export const Team = Template.bind({});
Team.args = {
  image: {
    url: "https://images.unsplash.com/photo-1583485767110-23ca3eefaac9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=988&q=80",
  },
  title: "1. Mannschaft",
  subtitle: "Fußball - Damen",
};
