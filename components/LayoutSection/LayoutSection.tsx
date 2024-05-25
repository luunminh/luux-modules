import { COLOR_CODE } from '@core/common';
import { Container, ContainerProps } from '@mantine/core';
import { PropsWithChildren } from 'react';

type Props = ContainerProps & PropsWithChildren;

const LayoutSection = ({ children, size = 'xl', style, ...props }: Props) => {
  return (
    <Container
      size={size}
      mt={16}
      p={16}
      style={{
        borderRadius: 16,
        backgroundColor: 'white',
        border: COLOR_CODE.BORDER_DEFAULT,
        ...style,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};

export default LayoutSection;
