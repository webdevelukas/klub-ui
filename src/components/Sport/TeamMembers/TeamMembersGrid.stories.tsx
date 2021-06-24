import { Story, Meta } from "@storybook/react";
import TeamMembersGrid, { TeamMembersGridProps } from "./TeamMembersGrid";
import { teamMembers } from "../../../api/teamMembers";

export default {
  title: "Sport/Team Members Grid",
  component: TeamMembersGrid,
  parameters: {
    componentSubtitle: "Displays a grid of team members",
  },
} as Meta;

const Template: Story<TeamMembersGridProps> = (args) => (
  <TeamMembersGrid {...args} />
);

export const Players = Template.bind({});
Players.args = { teamMembers };
