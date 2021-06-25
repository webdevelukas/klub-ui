import { Story, Meta } from "@storybook/react";
import NewsTeaserItem, { NewsTeaserItemProps } from "./NewsTeaserItem";

export default {
  title: "News/NewsTeaserItem",
  component: NewsTeaserItem,
  parameters: {
    componentSubtitle: "Teaser list item of a news list",
  },
} as Meta;

const Template: Story<NewsTeaserItemProps> = (args) => (
  <NewsTeaserItem {...args} />
);

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
    content:
      "Die Coronapause stellt auch die Fußballer des TSV vor große Herausforderungen, diverse Feste mussten bereits abgesagt werden, Trainingseinheiten konnten nicht regelmäßig stattfinden und Spiele musste immer wieder verschoben oder sogar abgesagt werden.",
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
    content:
      "Die Coronapause stellt auch die Fußballer des TSV vor große Herausforderungen, diverse Feste mussten bereits abgesagt werden, Trainingseinheiten konnten nicht regelmäßig stattfinden und Spiele musste immer wieder verschoben oder sogar abgesagt werden.",
  },
};
