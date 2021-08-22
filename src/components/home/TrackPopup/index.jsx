import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';

export default function TrackPopup({ setIsPopupVisibleCb }) {
  return (
    <Wrapper>
      <Frame>
        <Header>Track User</Header>

        <Body>
          <div>Name: Jim Morris</div>
          <div>Project Time: 17 hours</div>
          <div>Note:</div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <div>
            Tracked: <input type="checkbox" />
          </div>
        </Body>

        <Footer>
          <Button color="red" onClick={() => setIsPopupVisibleCb(false)} />
          <Button color="green" />
        </Footer>
      </Frame>
    </Wrapper>
  );
}
