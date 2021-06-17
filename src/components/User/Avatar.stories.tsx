import { Story, Meta } from "@storybook/react";
import { Avatar, Props } from "./Avatar";

export default {
  title: "User/Avatar",
  component: Avatar,
  parameters: {
    componentSubtitle: "Displays an Image, name and role of an user",
  },
} as Meta;

const Template: Story<Props> = (args) => <Avatar {...args} />;

export const First = Template.bind({});
First.args = {
  user: {
    image: {
      url: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      alt: "Sarah Hanna",
    },
    name: "Sarah Hanna",
    role: "Head of us",
  },
};
