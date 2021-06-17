import { Story, Meta } from "@storybook/react";
import Standings, { Props } from "./Standings";
import { standings } from "../../api/standings";

export default {
  title: "Sport/Standings",
  component: Standings,
  parameters: {
    componentSubtitle: "Displays the standings of a sports league",
  },
} as Meta;

const Template: Story<Props> = (args) => <Standings {...args} />;

export const Soccer = Template.bind({});
Soccer.args = { standings };
