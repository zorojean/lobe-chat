import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

const Header = memo(() => (
  <MobileNavBar
    center={
      <div style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>YueHashChat</div>
    }
  />
));

export default Header;
