import { Story, Meta } from "@storybook/react";
import NewsListItem, { NewsListItemProps } from "./NewsListItem";

export default {
  title: "News/NewsListItem",
  component: NewsListItem,
  parameters: {
    componentSubtitle: "List item of a news list",
  },
} as Meta;

const Template: Story<NewsListItemProps> = (args) => <NewsListItem {...args} />;

export const WithNews = Template.bind({});
WithNews.args = {
  article: {
    image: {
      url: "https://images.unsplash.com/photo-1530818021323-3d2bf2af7a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "",
    },
    title: "Auf geht's zum Giro de Paunzhausen",
    createdAt: "25.02.2010",
    slug: "/",
  },
};

export const LongTitle = Template.bind({});
LongTitle.args = {
  article: {
    image: {
      url: "https://images.unsplash.com/photo-1530818021323-3d2bf2af7a87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "",
    },
    title: "Auf geht's zum Giro de Paunzhausen - einmal hin und einmal her",
    createdAt: "25.02.2010",
    slug: "/",
  },
};
