import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import ShareAgentButton from '../../features/ShareAgentButton';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={
        <div style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>YueHashChat</div>
      }
      right={<ShareAgentButton mobile />}
    />
  );
});

export default Header;
