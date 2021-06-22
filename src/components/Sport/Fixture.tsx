import styled from "styled-components";
import NextImage from "next/image";
import { renderDate } from "../../services";

export type Props = {
  match: {
    homeTeam: { logo: { url: string; alt: string } };
    awayTeam: { logo: { url: string; alt: string } };
    result: string;
    date: string;
  };
};

function Fixture({ match }: Props) {
  const { homeTeam, awayTeam, result, date } = match;

  return (
    <Article>
      <Scoring>
        <TeamLogo>
          <NextImage
            src={homeTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={homeTeam.logo.alt}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
        <Result>{result || "-"}</Result>
        <TeamLogo>
          <NextImage
            src={awayTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={awayTeam.logo.alt}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
      </Scoring>
      <Meta>{renderDate(date)}</Meta>
    </Article>
  );
}

export default Fixture;

const Article = styled.article`
  display: grid;
  grid-template-rows: 6rem auto;
  background-color: var(--content-background);
  justify-content: center;
`;

const variableLogoWidth =
  "minmax(1rem, calc(6rem - var(--medium-spacing) * 2))";

const Scoring = styled.div`
  display: grid;
  padding: var(--medium-spacing) var(--medium-spacing);
  grid-template-columns: ${variableLogoWidth} auto ${variableLogoWidth};
  column-gap: var(--medium-spacing);
  place-items: center center;
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
