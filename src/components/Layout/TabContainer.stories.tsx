import { Story, Meta } from "@storybook/react";
import TabContainer, { TabContainerProps } from "./TabContainer";
import { matches, standings, teamMembers } from "./../../api";

export default {
  title: "Layout/TabContainer",
  component: TabContainer,
  parameters: {
    componentSubtitle: "Displays a container with a group of tabs",
  },
} as Meta;

const Template: Story<TabContainerProps> = (args) => <TabContainer {...args} />;

export const ThreeTabs = Template.bind({});
ThreeTabs.args = { matches, standings, teamMembers };
