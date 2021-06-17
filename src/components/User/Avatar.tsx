import styled from "styled-components";
import NextImage from "next/image";
import { Mail, Phone } from "../../elements/icons";

export type Props = {
  user: {
    image: {
      url: string;
      alt: string;
    };
    name: string;
    role?: string;
    email?: string;
    phone?: string;
  };
};

export function Avatar({ user }: Props) {
  const { image, name, role, email, phone } = user;
  const hasEmailOrPhone = email || phone;

  return (
    <Container>
      <ImageWrapper>
        <NextImage
          src={image.url || "/placeholder.svg"}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Wrapper>
        <div>
          <Name>{name}</Name>
          {role && <Role>{role}</Role>}
        </div>
        {hasEmailOrPhone && (
          <IconList>
            {email && (
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail />
              </a>
            )}
            {phone && (
              <a
                href={`tel:${phone}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone />
              </a>
            )}
          </IconList>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.article`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  column-gap: var(--medium-spacing);
  place-items: center left;
  justify-content: left;
  background-color: var(--content-background);
  padding: var(--medium-spacing);

  @media screen and (min-width: 992px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;

  > div:first-child {
    border-radius: 50%;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--medium-spacing);
`;

const IconList = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  justify-content: left;
  column-gap: var(--medium-spacing);
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Role = styled.p`
  line-height: 0.8rem;
`;
