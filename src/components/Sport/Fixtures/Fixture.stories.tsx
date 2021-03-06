import { Story, Meta } from "@storybook/react";
import Fixture, { FixtureProps } from "./Fixture";

export default {
  title: "Sport/Fixture",
  component: Fixture,
  parameters: {
    componentSubtitle: "Displays the fixture of a sports match",
  },
} as Meta;

const Template: Story<FixtureProps> = (args) => <Fixture {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  match: {
    homeTeam: {
      name: "",
      logo: {
        url: "https://www.tsvpaunzhausen.de/themes/tsv_paunzhausen/images/logo.png",
        alt: "",
      },
    },
    awayTeam: {
      name: "",
      logo: {
        url: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa86be514f450597c/image/i595114f6305cb21b/version/1542297781/image.png",
        alt: "",
      },
    },
    result: "2:1",
    date: "23.06.2021",
    time: "08:25",
  },
};

export const Detailed = Template.bind({});
Detailed.args = {
  layout: "detailed",
  match: {
    homeTeam: {
      name: "TSV Paunzhausen",
      logo: {
        url: "https://www.tsvpaunzhausen.de/themes/tsv_paunzhausen/images/logo.png",
        alt: "",
      },
    },
    awayTeam: {
      name: "ST Scheyern",
      logo: {
        url: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa86be514f450597c/image/i595114f6305cb21b/version/1542297781/image.png",
        alt: "",
      },
    },
    result: "2:1",
    date: "23.06.2021",
    time: "14:00",
    competitionName: "413 Kreisklasse 3",
    matchday: 23,
    newsUrl: "/",
  },
};

export const Minified = Template.bind({});
Minified.args = {
  layout: "minified",
  match: {
    homeTeam: {
      name: "",
      logo: {
        url: "https://www.tsvpaunzhausen.de/themes/tsv_paunzhausen/images/logo.png",
        alt: "",
      },
    },
    awayTeam: {
      name: "",
      logo: {
        url: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa86be514f450597c/image/i595114f6305cb21b/version/1542297781/image.png",
        alt: "",
      },
    },
    result: "2:1",
    date: "23.06.2021",
    time: "08:25",
  },
};
