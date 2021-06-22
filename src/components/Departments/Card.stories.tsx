import { Story, Meta } from "@storybook/react";
import Card, { Props } from "./Card";

export default {
  title: "Department/Card",
  component: Card,
  parameters: {
    componentSubtitle: "Displays an Image, name and role of an user",
  },
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Soccer = Template.bind({});
Soccer.args = {
  department: {
    name: "Fußball",
    image: {
      url: "https://images.unsplash.com/photo-1598880513655-d1c6d4b2dfbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    },
  },
};

export const Tennis = Template.bind({});
Tennis.args = {
  department: {
    name: "Tennis",
    image: {
      url: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
  },
};
