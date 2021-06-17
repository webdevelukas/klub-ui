import styled from "styled-components";
import PageSection from "../../elements/PageSection";
import { Users } from "../../types";
import Avatar from "./Avatar";

export type Props = {
  users: Users;
  title: string;
};

function AvatarList({ users, title }: Props) {
  return (
    <PageSection title={title}>
      <GridContainer>
        {users.map((user, index) => (
          <Avatar key={index} user={user} />
        ))}
      </GridContainer>
    </PageSection>
  );
}

export default AvatarList;

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: 1px;
`;
