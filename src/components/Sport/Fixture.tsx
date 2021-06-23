import { DetailedMatch, Match } from "../../types";
import { Normal, Detailed, Minified } from "./Fixtures";

type MatchProps = {
  layout: "normal";
  match: Match;
};

type DetailedMatchProps = {
  layout: "details";
  match: DetailedMatch;
};

type MinifiedMatchProps = {
  layout: "minified";
  match: Match;
};

export type FixtureProps = MatchProps | DetailedMatchProps | MinifiedMatchProps;

function isDetailed(props: FixtureProps): props is DetailedMatchProps {
  return (props as DetailedMatchProps).layout === "details";
}

function isMinified(props: FixtureProps): props is MinifiedMatchProps {
  return (props as MinifiedMatchProps).layout === "minified";
}

function Fixture(props: FixtureProps) {
  return (
    <>
      {!isDetailed(props) && !isMinified && <Normal match={props.match} />}
      {isDetailed(props) && <Detailed match={props.match} />}
      {isMinified(props) && <Minified match={props.match} />}
    </>
  );
}

export default Fixture;
