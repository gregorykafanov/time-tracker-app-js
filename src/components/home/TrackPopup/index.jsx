import {
  useCurrentUserCTX,
  useIsPopupOpenedCTX,
  useUpdateUserCTX,
} from 'context/GlobalContext';
import { useLocalStorage } from 'hooks/SHARED/index';
import { useState } from 'react';
import { Body, Button, Footer, Frame, Header, Wrapper } from './styled';

export default function TrackPopup() {
  const [, setIsPopupOpened] = useIsPopupOpenedCTX();
  const [currentUser] = useCurrentUserCTX();
  const [projectTime, setProjectTime] = useState(currentUser.projectTime);
  const [note, setNote] = useState(currentUser.note);
  const [isTracked, setIsTracked] = useState(currentUser.isTracked);
  const [setUpdateUser] = useUpdateUserCTX();
  const [localStorageValue, setLocalStorageValue] = useLocalStorage(
    '_TRACK-APP_',
    null
  );

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

    // console.log('+', localStorageValue[0]);
    // console.log('currentUser.indexArray', currentUser.indexArray);
    // console.log('->', localStorageValue[currentUser.indexArray]);
    setUpdateUser(updatedUser);
    const localStorageUsers = localStorageValue;
    localStorageUsers.splice(currentUser.indexArray, 1, updatedUser);
    // console.log('localStorageUsers', localStorageUsers);

    setLocalStorageValue(localStorageUsers);
    setIsPopupOpened(false);
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
            />
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
