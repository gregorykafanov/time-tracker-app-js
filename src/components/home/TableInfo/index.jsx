import { Wrapper, Table, HeadCell, BodyCell, Row } from './styled';

export default function TableInfo() {
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
          <Row>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
          </Row>
          {/* <Row>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
          </Row>
          <Row>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
            <BodyCell>Alfreds Futterkiste</BodyCell>
          </Row> */}
        </tbody>
      </Table>
    </Wrapper>
  );
}
