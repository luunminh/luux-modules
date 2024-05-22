import { PATHS } from '@config/paths';
import CustomIcon from '@core/common/assets/icon';
import { Button, Stack, Text, Title } from '@mantine/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  showButton?: boolean;
};

const UnderConstruction: FC<Props> = ({ showButton = true }) => {
  return (
    <Stack align="center" py={16}>
      <CustomIcon.UnderConstruction />

      <Stack align="center" gap={16} mt={32}>
        <Title order={3}>Page is under construction</Title>
        <Text>
          The page you are trying to access is currently under construction and is not available at
          the moment. We apologize for any inconvenience this may have caused
        </Text>
        {showButton && (
          <Link to={PATHS.root}>
            <Button variant="contained">Back to Home Page</Button>
          </Link>
        )}
      </Stack>
    </Stack>
  );
};

export default UnderConstruction;
