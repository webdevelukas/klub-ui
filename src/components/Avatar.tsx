import styled from "styled-components";
import NextImage from "next/image";

export type AvatarProps = {
  user: { image: { url: string }; name: string; position: string };
};

export function Avatar({ user }: AvatarProps) {
  return (
    <Container>
      <Picture>
        <NextImage src={user.image.url} layout="fill" objectFit="cover" />
      </Picture>
      <Name>{user.name}</Name>
      <Role>{user.position}</Role>
    </Container>
  );
}

const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const Container = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 0.5rem;
  place-items: center center;

  @media screen and (min-width: 1100px) {
    font-size: 1.25rem;
  }
`;
const Picture = styled.picture`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: 2px solid red;

  > div:first-child {
    border-radius: 50%;
  }
`;
const Role = styled.p`
  line-height: 0.8rem;
`;
