import { useCurrentUserCTX, useIsPopupOpenedCTX } from 'context/GlobalContext';
import { useState } from 'react';
import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';

export default function TrackPopup() {
  const [, setIsPopupOpened] = useIsPopupOpenedCTX();
  const [currentUser, setCurrentUser] = useCurrentUserCTX();
  const [projectTime, setProjectTime] = useState(currentUser.projectTime);
  const [note, setNote] = useState(currentUser.note);
  const [isTracked, setIsTracked] = useState(currentUser.isTracked);

  const checkboxTogglerHandler = () => {
    setIsTracked(prev => !prev);
  };

  const onNoteTypeHandler = e => {
    setNote(e.target.value);
  };

  const onProjectTypeHandler = e => {
    setProjectTime(e.target.value);
  };

  const onSaveClickHandler = () => {
    const updatedUser = {
      ...currentUser,
      projectTime,
      note,
      isTracked,
    };
    setCurrentUser(updatedUser);
  };

  return (
    <Wrapper onClick={() => setIsPopupOpened(false)}>
      <Frame onClick={e => e.stopPropagation()}>
        <Header>Track User</Header>

        <Body>
          <div>Name: {currentUser.name}</div>

          <div>
            Project Time:
            <input
              type="text"
              value={projectTime}
              onChange={onProjectTypeHandler}
            />{' '}
            hours
          </div>

          <div>Note: </div>

          <textarea
            name="popup"
            cols="30"
            rows="10"
            value={note}
            onChange={onNoteTypeHandler}
          />

          <div>
            Tracked:{' '}
            <input
              type="checkbox"
              checked={isTracked}
              onChange={checkboxTogglerHandler}
            />
          </div>
        </Body>

        <Footer>
          <Button color="red" onClick={() => setIsPopupOpened(false)} />
          <Button color="green" onClick={onSaveClickHandler} />
        </Footer>
      </Frame>
    </Wrapper>
  );
}
