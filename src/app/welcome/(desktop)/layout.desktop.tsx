'use client';

import { PropsWithChildren, memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import AppLayoutDesktop from '@/layout/AppLayout.desktop';

import { useStyles } from '../features/Banner/style';

const Desktop = memo<PropsWithChildren>(({ children }) => {
  const { styles } = useStyles();
  return (
    <AppLayoutDesktop>
      <Center
        className={styles.layout}
        flex={1}
        height={'100%'}
        horizontal
        style={{ position: 'relative' }}
      >
        <div style={{ color: 'white', fontSize: '25px', fontWeight: 'bolder' }}>YueHashChat</div>
        <Flexbox className={styles.view} flex={1}>
          {children}
        </Flexbox>
      </Center>
    </AppLayoutDesktop>
  );
});

export default Desktop;
