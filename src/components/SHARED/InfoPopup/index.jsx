import { useIsMessagePopupOpenedCTX } from 'context/GlobalContext';
import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';

export default function InfoPopup({ message }) {
  const [, setIsInfoPopupOpened] = useIsMessagePopupOpenedCTX();

  return (
    <Wrapper onClick={() => setIsInfoPopupOpened(false)}>
      <Frame onClick={e => e.stopPropagation()}>
        <Header>Application Message</Header>

        <Body>{message}</Body>

        <Footer>
          <Button color="red" onClick={() => setIsInfoPopupOpened(false)} />
        </Footer>
      </Frame>
    </Wrapper>
  );
}
