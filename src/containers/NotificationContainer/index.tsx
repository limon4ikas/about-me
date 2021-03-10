import { FunctionComponent, useEffect, useState } from 'react';
import { NotificationItem } from './types';
import Notification from '../../components/Notification';
import { Container } from './styles';

interface NotificationProps {
  notificationList: NotificationItem[] | [];
  position?: string;
}

const NotificationContainer: FunctionComponent<NotificationProps> = ({
  notificationList,
}) => {
  const [list, setList] = useState<NotificationItem[] | []>([]);

  useEffect(() => {
    setList(notificationList);
  }, [notificationList]);

  const renderList = list.map((item: NotificationItem) => {
    return (
      <Notification
        key={item.id}
        title={item.title}
        color={item.backgroundColor}
      >
        {item.description}
      </Notification>
    );
  });

  return <Container>{renderList}</Container>;
};

export default NotificationContainer;
