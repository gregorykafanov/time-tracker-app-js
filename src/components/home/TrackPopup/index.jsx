import { useCurrentUserCTX, useIsPopupOpenedCTX } from 'context/GlobalContext';
import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';

export default function TrackPopup() {
  const [, setIsPopupOpened] = useIsPopupOpenedCTX();
  const [currentUser, setCurrentUser] = useCurrentUserCTX();

  return (
    <Wrapper onClick={() => setIsPopupOpened(false)}>
      <Frame onClick={e => e.stopPropagation()}>
        <Header>Track User</Header>

        <Body>
          <div>Name: {currentUser.name}</div>
          <div>Project Time: {currentUser.projectTime} hours</div>
          <div>Note: {currentUser.note}</div>
          <textarea name="popup" cols="30" rows="10" value={currentUser.note} />
          <div>
            Tracked: <input type="checkbox" checked={currentUser.isTracked} />
          </div>
        </Body>

        <Footer>
          <Button color="red" onClick={() => setIsPopupOpened(false)} />
          <Button color="green" />
        </Footer>
      </Frame>
    </Wrapper>
  );
}
