import { useGlobalStateCTX } from 'context/GlobalContext';
import { Wrapper } from 'pages/home/styled';

export default function UsersDropdown() {
  const { users } = useGlobalStateCTX();

  return (
    <Wrapper>
      <select name="users">
        <option defaultValue="selected">-- select user --</option>
        {users.map(({ name, id }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </Wrapper>
  );
}
