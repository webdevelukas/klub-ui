import styled from "styled-components";
import NextImage from "next/image";

export type Props = {
  user: {
    image: {
      url: string;
      alt: string;
    };
    name: string;
    role?: string;
  };
};

export function Avatar({ user }: Props) {
  const { image, name, role } = user;

  return (
    <Container>
      <Picture>
        <NextImage
          src={image.url || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
        />
      </Picture>
      <Name>{name}</Name>
      {role && <Role>{role}</Role>}
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

  > div:first-child {
    border-radius: 50%;
  }
`;
const Role = styled.p`
  line-height: 0.8rem;
`;
