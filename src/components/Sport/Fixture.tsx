import { DetailedMatch, Match } from "../../types";
import { Normal, Detailed } from "./Fixtures";

type MatchProps = {
  layout: "normal";
  match: Match;
};

type DetailedMatchProps = {
  layout: "details";
  match: DetailedMatch;
};

export type FixtureProps = MatchProps | DetailedMatchProps;

function isDetailed(props: FixtureProps): props is DetailedMatchProps {
  return (props as DetailedMatchProps).layout === "details";
}

function Fixture(props: FixtureProps) {
  return (
    <>
      {!isDetailed(props) && <Normal match={props.match} />}
      {isDetailed(props) && <Detailed match={props.match} />}
    </>
  );
}

export default Fixture;
