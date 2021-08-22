import { useFilterTrackedCTX } from 'context/GlobalContext';
import UsersDropdown from '../UsersDropdown/index';
import { Tab, Wrapper } from './styled';

export default function NavigationTabs() {
  const [setIsFilterByTrack] = useFilterTrackedCTX();

  return (
    <Wrapper>
      <UsersDropdown />
      <Tab onClick={() => setIsFilterByTrack(false)}>Tracker</Tab>
      <Tab onClick={() => setIsFilterByTrack(true)}>Tracked Items</Tab>
    </Wrapper>
  );
}
