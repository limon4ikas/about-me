import { FunctionComponent } from 'react';
import {
  NotificationColor,
  NotificationType,
} from '../../containers/NotificationContainer/types';
import {
  Container,
  Heading,
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
        <Heading>{title}</Heading>
        <Text>{children}</Text>
      </Content>
      <CloseButton onClick={() => handleCloseClick(id)}>
        <CloseIcon />
      </CloseButton>
    </Container>
  );
};

export default Notification;