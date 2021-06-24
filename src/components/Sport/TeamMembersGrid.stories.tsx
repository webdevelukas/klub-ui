import { Story, Meta } from "@storybook/react";
import TeamMembersGrid, { TeamMembersGridProps } from "./TeamMembersGrid";
import { teamMembers } from "../../api/teamMembers";

export default {
  title: "Sport/Team Members Grid",
  component: TeamMembersGrid,
  parameters: {
    componentSubtitle: "Displays a team member of a sports team",
  },
} as Meta;

const Template: Story<TeamMembersGridProps> = (args) => (
  <TeamMembersGrid {...args} />
);

export const Player = Template.bind({});
Player.args = { teamMembers };
