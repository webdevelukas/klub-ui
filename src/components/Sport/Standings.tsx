import styled, { CSSProperties } from "styled-components";
import NextImage from "next/image";
import { SoccerStandings } from "../../types";

interface TableCellProps extends CSSProperties {
  "--rank-color": string | undefined;
}

export type Props = { standings: SoccerStandings };

function Standings({ standings }: Props) {
  const {
    season,
    league,
    region,
    promotedTeams,
    promotedQualifierTeams,
    relegatedQualifierTeams,
    relegatedTeams,
    teams,
  } = standings;

  const leagueMeta = {
    promotedTeams,
    promotedQualifierTeams,
    relegatedQualifierTeams,
    relegatedTeams,
    numberOfTeams: teams.length,
  };

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableHeader scope="col">Pl.</TableHeader>
          <TableHeader />
          <TeamHeader scope="col">Team</TeamHeader>
          <TableHeader scope="col">Sp.</TableHeader>
          <TableHeader scope="col">Diff.</TableHeader>
          <TableHeader scope="col">Pkt.</TableHeader>
        </TableRow>
        {teams.map(
          ({ rank, teamname, playedGames, points, goalsDifference }, index) => {
            const rankStyle: TableCellProps = getRankingColor(
              index,
              leagueMeta
            );

            return (
              <TableRow key={index}>
                <TableCell style={rankStyle}>{rank}</TableCell>
                <TableCell>
                  <TeamLogo>
                    <NextImage
                      src={"/placeholders/team-logo.svg"}
                      layout="fill"
                      objectFit="contain"
                    />
                  </TeamLogo>
                </TableCell>
                <TeamName>{teamname}</TeamName>
                <TableCell>{playedGames}</TableCell>
                <TableCell>{goalsDifference}</TableCell>
                <TableCell>{points}</TableCell>
              </TableRow>
            );
          }
        )}
      </TableBody>
      <Caption>
        <div>
          {league} | {region}
        </div>
        <div>Saison {season}</div>
      </Caption>
    </Table>
  );
}

export default Standings;

type leagueMeta = {
  promotedTeams: number;
  promotedQualifierTeams: number;
  relegatedQualifierTeams: number;
  relegatedTeams: number;
  numberOfTeams: number;
};

function getRankingColor(index: number, leagueMeta: leagueMeta) {
  const rank = index + 1;
  const {
    promotedTeams,
    promotedQualifierTeams,
    relegatedQualifierTeams,
    relegatedTeams,
    numberOfTeams,
  } = leagueMeta;

  const isRelegated = numberOfTeams - relegatedTeams < rank;
  const isRelegatedQualifier =
    numberOfTeams - relegatedTeams - relegatedQualifierTeams < rank;
  const isPromoted = promotedTeams >= rank;
  const isPromotedQualifier = promotedTeams + promotedQualifierTeams >= rank;

  if (isRelegated) {
    return { "--rank-color": "rgb(255, 75, 125)" };
  }
  if (isRelegatedQualifier) {
    return { "--rank-color": "rgb(255, 145, 175)" };
  }
  if (isPromoted) {
    return { "--rank-color": "rgb(75, 250, 195)" };
  }
  if (isPromotedQualifier) {
    return { "--rank-color": "rgb(185, 250, 230)" };
  }

  return { "--rank-color": undefined };
}

const Table = styled.table`
  display: grid;
  width: 100%;
  border-collapse: collapse;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: 1px;
`;

const TableBody = styled.tbody`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: 1px;
`;

const TableRow = styled.tr`
  display: grid;
  background-color: var(--content-background);
  grid-template-columns: 2rem 3rem 3fr 1fr 1fr 1fr;
  column-gap: var(--small-spacing);
  place-items: center;
`;

const TableHeader = styled.th`
  font-size: 0.75rem;
  font-weight: normal;
`;

const TeamHeader = styled.th`
  font-size: 0.75rem;
  font-weight: normal;
  text-align: left;
  justify-self: left;
  padding: var(--small-spacing);
`;

const TeamLogo = styled.div`
  position: relative;
  height: 2rem;
  width: 100%;
`;

const TeamName = styled.td`
  text-align: left;
  justify-self: left;
  border: none;
`;

const TableCell = styled.td`
  background-color: var(--rank-color, none);
  width: 100%;
  height: 100%;
  padding: var(--small-spacing);
  min-width: 1rem;
`;

const Caption = styled.caption`
  display: flex;
  justify-content: space-between;
  caption-side: bottom;
  background-color: var(--content-background);
  padding: var(--small-spacing);
  font-size: 0.75rem;
`;
