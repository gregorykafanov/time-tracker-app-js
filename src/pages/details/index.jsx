import { useGlobalStateCTX } from 'context/GlobalContext';
import { useQuery } from 'hooks/details/index';
// import { useEffect } from 'react';

export default function Details({ match, location }) {
  const { users } = useGlobalStateCTX();
  const query = useQuery();
  const userArrayIndex = query.get('index');
  const user = users[userArrayIndex];

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
