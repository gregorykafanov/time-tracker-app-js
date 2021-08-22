import { useGlobalStateCTX } from 'context/GlobalContext';
import { Wrapper, Table, HeadCell, BodyCell, Row } from './styled';

export default function TableInfo() {
  const { users } = useGlobalStateCTX();

  return (
    <Wrapper>
      <Table>
        <thead>
          <Row>
            <HeadCell>Name</HeadCell>
            <HeadCell>Status</HeadCell>
            <HeadCell>More</HeadCell>
          </Row>
        </thead>

        <tbody>
          {users.map(user => (
            <Row key={user.id}>
              <BodyCell>{user.name}</BodyCell>
              <BodyCell>{`${user.isTracked}`}</BodyCell>
              <BodyCell>
                <a href="/details">more info</a>
              </BodyCell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
