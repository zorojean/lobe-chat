import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  return (
    <Flexbox height={'100%'} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        {/* <Logo extra={'Chat'} size={48} type={'combine'} /> */}
        <Center gap={16} horizontal>
          {/* <Icon icon={Loader2} spin /> */}
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
