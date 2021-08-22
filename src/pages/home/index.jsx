import UsersDropdown from 'components/home/UsersDropdown/index';
import { useEffect, useState } from 'react';
import { Header, Wrapper } from './styled';
import { useSetUsersCTX } from '../../context/GlobalContext';
import { getUsersAPI } from '../../services/home/index';
import NavigationTabs from 'components/home/NavigationTabs/index';
import TrackPopup from 'components/home/TrackPopup/index';

export default function Home() {
  const [, setUsers] = useSetUsersCTX();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

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
  }, [setUsers]);

  return (
    <Wrapper>
      <Header>Time Tracker</Header>
      <NavigationTabs />
      <UsersDropdown />
      <button onClick={() => setIsPopupVisible(true)}>Text popup</button>
      {isPopupVisible && <TrackPopup setIsPopupVisibleCb={setIsPopupVisible} />}
    </Wrapper>
  );
}
