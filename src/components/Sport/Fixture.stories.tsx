import { Story, Meta } from "@storybook/react";
import PageSection from "../../elements/PageSection";
import Fixture, { Props } from "./Fixture";

export default {
  title: "Sport/Fixture",
  component: Fixture,
  parameters: {
    componentSubtitle: "Displays the fixture of a sports match",
  },
} as Meta;

const Template: Story<Props> = (args) => <Fixture {...args} />;
const PageTemplate: Story<Props> = (args) => (
  <PageSection title="Ergebnis">
    <Fixture {...args} />
  </PageSection>
);

export const Raw = Template.bind({});
Raw.args = {
  match: {
    homeTeam: {
      logo: {
        url: "https://www.tsvpaunzhausen.de/themes/tsv_paunzhausen/images/logo.png",
        alt: "",
      },
    },
    awayTeam: {
      logo: {
        url: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa86be514f450597c/image/i595114f6305cb21b/version/1542297781/image.png",
        alt: "",
      },
    },
    result: "2:1",
    date: "21.03.2012",
  },
};

export const Result = PageTemplate.bind({});
Result.args = {
  match: {
    homeTeam: {
      logo: {
        url: "",
        alt: "",
      },
    },
    awayTeam: {
      logo: {
        url: "",
        alt: "",
      },
    },
    result: "",
    date: "21.03.2012",
  },
};
