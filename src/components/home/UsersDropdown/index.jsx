import {
  useCurrentUserCTX,
  useGlobalStateCTX,
  useIsPopupOpenedCTX,
} from 'context/GlobalContext';
import { Wrapper } from 'pages/home/styled';

export default function UsersDropdown() {
  const { users } = useGlobalStateCTX();
  const [, setIsPopupOpened] = useIsPopupOpenedCTX();
  const [, setCurrentUser] = useCurrentUserCTX();

  const onClickHandler = event => {
    if (Number(event.target.value) !== -1) {
      const selectedUser = JSON.parse(event.target.value);
      setCurrentUser(selectedUser);
      setIsPopupOpened(true);
    }
  };

  return (
    <Wrapper>
      <select name="users" onClick={onClickHandler}>
        <option value={-1} defaultValue="selected">
          -- select user --
        </option>
        {users.map((user, index) => {
          user.index = index;
          return (
            <option key={user.id} value={JSON.stringify(user)}>
              {user.name}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
}
