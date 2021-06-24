import { Story, Meta } from "@storybook/react";
import Standings, { Props } from "./Standings";
import { standings } from "../../../api/standings";
import PageSection from "../../../elements/PageSection";

export default {
  title: "Sport/Standings",
  component: Standings,
  parameters: {
    componentSubtitle: "Displays the standings of a sports league",
  },
} as Meta;

const Template: Story<Props> = (args) => <Standings {...args} />;
const PageTemplate: Story<Props> = (args) => (
  <PageSection title="Tabelle">
    <Standings {...args} />
  </PageSection>
);

export const Soccer = Template.bind({});
Soccer.args = { standings };

export const StandingsPageSection = PageTemplate.bind({});
StandingsPageSection.args = { standings };
