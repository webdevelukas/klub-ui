import { Story, Meta } from "@storybook/react";
import FixturesList, { FixturesListProps } from "./FixturesList";
import { matches } from "../../api/matches";

export default {
  title: "Sport/FixturesList",
  component: FixturesList,
  parameters: {
    componentSubtitle: "Displays a list of fixtures of a sports match",
  },
} as Meta;

const Template: Story<FixturesListProps> = (args) => <FixturesList {...args} />;

export const Normal = Template.bind({});
Normal.args = { matches };

export const Detailed = Template.bind({});
Detailed.args = {
  layout: "detailed",
  matches,
};

export const Minified = Template.bind({});
Minified.args = {
  layout: "minified",
  matches,
};
