import { Story, Meta } from "@storybook/react";
import TeamMember, { TeamMemberProps } from "./TeamMember";

export default {
  title: "Sport/Team Member",
  component: TeamMember,
  parameters: {
    componentSubtitle: "Displays a grid of team members",
  },
} as Meta;

const Template: Story<TeamMemberProps> = (args) => <TeamMember {...args} />;

export const Player = Template.bind({});
Player.args = {
  teamMember: {
    image: {
      url: "https://images.unsplash.com/photo-1597179300169-dce9b5b530f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      alt: "",
    },
    name: "Hans Peter",
  },
};
