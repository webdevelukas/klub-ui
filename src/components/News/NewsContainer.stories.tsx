import { Story, Meta } from "@storybook/react";
import NewsContainer, { NewsContainerProps } from "./NewsContainer";

export default {
  title: "News/NewsContainer",
  component: NewsContainer,
  parameters: {
    componentSubtitle: "Container showing news teaser and list items",
  },
} as Meta;

const Template: Story<NewsContainerProps> = (args) => (
  <NewsContainer {...args} />
);

export const WithNews = Template.bind({});
WithNews.args = {
  articles: [
    {
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
    {
      image: {
        url: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        alt: "",
      },
      title: "Auf geht's zum Giro de Paunzhausen - einmal hin und einmal her",
      createdAt: "25.02.2010",
      slug: "/",
      content:
        "Die Coronapause stellt auch die Fußballer des TSV vor große Herausforderungen, diverse Feste mussten bereits abgesagt werden, Trainingseinheiten konnten nicht regelmäßig stattfinden und Spiele musste immer wieder verschoben oder sogar abgesagt werden.",
    },
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
};

export const WithoutNews = Template.bind({});
WithoutNews.args = { articles: [] };

export const OneArticle = Template.bind({});
OneArticle.args = {
  articles: [
    {
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
  ],
};

export const TwoArticles = Template.bind({});
TwoArticles.args = {
  articles: [
    {
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
    {
      image: {
        url: "https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        alt: "",
      },
      title: "Tennis im Dorf",
      createdAt: "25.02.2010",
      slug: "/",
      content:
        "Die Coronapause stellt auch die Fußballer des TSV vor große Herausforderungen, diverse Feste mussten bereits abgesagt werden, Trainingseinheiten konnten nicht regelmäßig stattfinden und Spiele musste immer wieder verschoben oder sogar abgesagt werden.",
    },
  ],
};
