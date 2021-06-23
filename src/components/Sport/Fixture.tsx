import styled from "styled-components";
import NextImage from "next/image";
import { renderDate } from "../../services";
import NextLink from "next/link";

export type Props =
  | {
      showDetails?: false;
      match: {
        homeTeam: { name: string; logo: { url: string; alt: string } };
        awayTeam: { name: string; logo: { url: string; alt: string } };
        result: string;
        date: string;
        time: string;
        competitionName: never;
        newsUrl: never;
        matchday: never;
      };
    }
  | {
      showDetails: true;
      match: {
        homeTeam: { name: string; logo: { url: string; alt: string } };
        awayTeam: { name: string; logo: { url: string; alt: string } };
        result: string;
        date: string;
        time: string;
        competitionName: string;
        newsUrl: string;
        matchday: number;
      };
    };

function Fixture({ showDetails, match }: Props) {
  const {
    homeTeam,
    awayTeam,
    result,
    date,
    time,
    competitionName,
    matchday,
    newsUrl,
  } = match;

  return (
    <Article showDetails={showDetails}>
      {showDetails && (
        <MetaWrapper>
          <Meta>
            {renderDate(date)} - {time} Uhr
          </Meta>
          <Meta>
            {competitionName}, {matchday}. Spieltag
          </Meta>
        </MetaWrapper>
      )}
      <Scoring showDetails={showDetails}>
        {showDetails && <TeamName>{homeTeam.name}</TeamName>}
        <TeamLogo>
          <NextImage
            src={homeTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={homeTeam.logo.alt || `${homeTeam.name} logo`}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
        <Result>{result || "-"}</Result>
        <TeamLogo>
          <NextImage
            src={awayTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={awayTeam.logo.alt || `${awayTeam.name} logo`}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
        {showDetails && <TeamName>{awayTeam.name}</TeamName>}
      </Scoring>
      {!showDetails && (
        <Meta>
          {renderDate(date)} - {time} Uhr
        </Meta>
      )}
      {showDetails && newsUrl && (
        <Wrapper>
          <NextLink href={`${newsUrl}`} passHref>
            <NewsLink>Spielbericht {">"}</NewsLink>
          </NextLink>
        </Wrapper>
      )}
    </Article>
  );
}

export default Fixture;

const Article = styled.article<{ showDetails: boolean | undefined }>`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  background-color: var(--content-background);
  justify-items: ${({ showDetails }) => (showDetails ? null : "center")};
`;

const variableLogoWidth =
  "minmax(1rem, calc(6rem - var(--medium-spacing) * 2))";

const Scoring = styled.div<{ showDetails: boolean | undefined }>`
  display: grid;
  grid-template-columns: ${({ showDetails }) =>
    showDetails
      ? `1fr ${variableLogoWidth} auto ${variableLogoWidth} 1fr`
      : `${variableLogoWidth} auto ${variableLogoWidth}`};
  column-gap: var(--medium-spacing);
  place-items: center center;
  min-height: 6rem;
  padding: var(--medium-spacing);
`;

const TeamLogo = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 90%;

  @media screen and (min-width: 576px) {
    padding-bottom: 80%;
  }
`;

const Result = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Meta = styled.p`
  text-align: center;
  padding-bottom: var(--small-spacing);
`;

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--medium-spacing) var(--medium-spacing) 0;
`;

const TeamName = styled.p`
  font-weight: bold;
  font-size: 1.25rem;

  :first-of-type {
    justify-self: right;
  }
  :last-of-type {
    justify-self: left;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 var(--medium-spacing) var(--medium-spacing);
`;

const NewsLink = styled.a`
  font-size: 0.75rem;
`;
