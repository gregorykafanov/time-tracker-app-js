import { useFilterTrackedCTX } from 'context/GlobalContext';
import { useState } from 'react';
import UsersDropdown from '../UsersDropdown/index';
import { Tab, Wrapper } from './styled';

export default function NavigationTabs() {
  const [setIsFilterByTrack] = useFilterTrackedCTX();
  const [isTrackerActive, setIsTrackedActive] = useState(true);
  const [isTrackedItemsActive, setIsTrackedItemsActive] = useState(false);

  const onTrackerTabClickHandler = () => {
    setIsFilterByTrack(false);
    setIsTrackedActive(true);
    setIsTrackedItemsActive(false);
  };

  return (
    <Wrapper>
      <UsersDropdown />
      <Tab active={isTrackerActive} onClick={() => setIsFilterByTrack(false)}>
        Tracker
      </Tab>
      <Tab
        active={isTrackedItemsActive}
        onClick={() => setIsFilterByTrack(true)}
      >
        Tracked Items
      </Tab>
    </Wrapper>
  );
}
