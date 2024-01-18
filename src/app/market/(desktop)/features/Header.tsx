import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  /* const { styles } = useStyles(); */

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <div style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>
            YueHashChat Discover
          </div>
        </Link>
      }
      /* right={<ShareAgentButton />} */
    />
  );
});

export default Header;
