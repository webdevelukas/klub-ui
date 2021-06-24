import { Match } from "../../types";
import { Normal, Detailed, Minified } from "./Fixtures";

export type FixtureProps = {
  layout?: "normal" | "detailed" | "minified";
  match: Match;
};

function Fixture({ layout, match }: FixtureProps) {
  switch (layout) {
    case "normal":
      return <Normal match={match} />;
    case "detailed":
      return <Detailed match={match} />;
    case "minified":
      return <Minified match={match} />;
    default:
      return <Normal match={match} />;
  }
}

export default Fixture;
