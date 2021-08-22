import UsersDropdown from 'components/home/UsersDropdown/index';
import { useEffect } from 'react';
import { Header, Wrapper } from './styled';
import { useIsPopupOpenedCTX, useSetUsersCTX } from 'context/GlobalContext';
import { getUsersAPI } from 'services/home/index';
import NavigationTabs from 'components/home/NavigationTabs/index';
import TrackPopup from 'components/home/TrackPopup/index';
import TableInfo from 'components/home/TableInfo/index';

export default function Home() {
  const [, setUsers] = useSetUsersCTX();
  const [isPopupOpened] = useIsPopupOpenedCTX();

  useEffect(() => {
    (async () => {
      const users = await getUsersAPI();
      const usersExtended = users.map(user => ({
        ...user,
        projectTime: 0,
        note: '',
        isTracked: false,
      }));

      setUsers(usersExtended);
    })();
  }, []);

  return (
    <Wrapper>
      <Header>Time Tracker</Header>
      <NavigationTabs />
      <UsersDropdown />
      <TableInfo />
      {isPopupOpened && <TrackPopup />}
    </Wrapper>
  );
}
