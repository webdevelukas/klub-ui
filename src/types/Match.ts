export type Match = {
  homeTeam: { name: string; logo: { url: string; alt: string } };
  awayTeam: { name: string; logo: { url: string; alt: string } };
  result: string;
  date: string;
  time: string;
};

export type DetailedMatch = Match & {
  competitionName: string;
  newsUrl: string;
  matchday: number;
};
