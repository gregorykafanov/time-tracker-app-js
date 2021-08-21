import UsersDropdown from 'components/home/UsersDropdown/index';
import { useEffect } from 'react';
import { Header, Wrapper } from './styled';
import { useSetUsersCTX } from '../../context/GlobalContext';
import { getUsersAPI } from '../../services/home/index';

export default function Home() {
  const [, setUsers] = useSetUsersCTX();

  useEffect(() => {
    (async () => {
      const users = await getUsersAPI();
      setUsers(users);
    })();
  }, [setUsers]);

  return (
    <Wrapper>
      <Header>Time Tracker</Header>
      <UsersDropdown />
    </Wrapper>
  );
}
