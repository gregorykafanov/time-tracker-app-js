import UsersDropdown from '../UsersDropdown/index';
import { Tab, Wrapper } from './styled';

export default function NavigationTabs() {
  return (
    <Wrapper>
      <UsersDropdown />
      <Tab>Tracker</Tab>
      <Tab>Tracked Items</Tab>
    </Wrapper>
  );
}
