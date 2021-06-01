import { Story, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar";

export default {
  title: "Example/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const First = Template.bind({});
First.args = {
  user: {
    image: {
      url: "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    name: "Sarah Hanna",
    position: "Head of us",
  },
};
