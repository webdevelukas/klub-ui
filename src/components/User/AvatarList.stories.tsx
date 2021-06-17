import { Story, Meta } from "@storybook/react";
import AvatarList, { Props } from "./AvatarList";

export default {
  title: "User/AvatarList",
  component: AvatarList,
  parameters: {
    componentSubtitle: "Displays as List of users",
  },
} as Meta;

const Template: Story<Props> = (args) => <AvatarList {...args} />;

export const WithUsers = Template.bind({});
WithUsers.args = {
  title: "Ansprechpartner",
  users: [
    {
      image: {
        url: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
      name: "Hanna Montana Branana",
      role: "Head of us",
      email: "yaahh",
    },
    {
      image: {
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
      },
      name: "Peter Pan",
      role: "Mitglied",
    },
    {
      image: {
        url: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      name: "Donald Dag",
      role: "Man of the Match",
      phone: "0000",
    },
  ],
};
