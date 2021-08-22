// import { useGlobalStateCTX } from 'context/GlobalContext';
import { useQuery } from 'hooks/details/index';
import { useLocalStorage } from 'hooks/SHARED/index';
// import { useEffect } from 'react';

export default function Details({ match, location }) {
  // const { users } = useGlobalStateCTX();
  const [usersLS] = useLocalStorage('_TRACK-APP_', []);
  const query = useQuery();
  const userArrayIndex = query.get('index');
  const user = usersLS[userArrayIndex];
  // const user = users[userArrayIndex];

  // useEffect(() => {}, []);

  return (
    <>
      <div>User Details</div>
      <div>Name: {user?.name}</div>
      <div>Project Time: {user?.projectTime}</div>
      <div>Note: {user?.note}</div>
      <div>Is Tracked: {`${user?.isTracked}`}</div>
    </>
  );
}
