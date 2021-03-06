import { FunctionComponent } from 'react';
import {
  NotificationColor,
  NotificationType,
} from '../../containers/NotificationContainer/types';
import Heading from '../Heading';
import {
  Container,
  Text,
  Content,
  IconBox,
  SuccessIcon,
  InfoIcon,
  WarningIcon,
  DangerIcon,
  CloseButton,
  CloseIcon,
} from './styles';

// TODO: #6 Create dynamicly imported icon component
const getIcon = (type: NotificationType) => {
  switch (type) {
    case NotificationType.Success:
      return <SuccessIcon />;
    case NotificationType.Info:
      return <InfoIcon />;
    case NotificationType.Warning:
      return <WarningIcon />;
    case NotificationType.Error:
      return <DangerIcon />;
  }
};

interface NotificationProps {
  title: NotificationType;
  color: NotificationColor;
  id: number;
  handleCloseClick: (id: number) => void;
}

const Notification: FunctionComponent<NotificationProps> = ({
  children,
  title,
  color,
  id,
  handleCloseClick,
}) => {
  return (
    <Container color={color}>
      <IconBox>{getIcon(title)}</IconBox>
      <Content>
        <Heading as="h4">{title}</Heading>
        <Text>{children}</Text>
      </Content>
      <CloseButton onClick={() => handleCloseClick(id)}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};

export default Notification;
