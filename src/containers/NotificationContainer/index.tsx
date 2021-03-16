import { FunctionComponent, useEffect, useState } from 'react';
import { NotificationItem } from './types';
import Notification from '../../components/Notification';
import { Container } from './styles';

interface NotificationProps {
  notificationList: NotificationItem[] | [];
  position?: 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
}

//TODO: use CreatePortal to mount and unmount Notifications Container

const NotificationContainer: FunctionComponent<NotificationProps> = ({
  notificationList,
  position = 'bottom-right',
}) => {
  const [list, setList] = useState<NotificationItem[]>([]);

  useEffect(() => {
    setList(notificationList);

    //TODO: Clean notification container
    return () => {};
  }, [notificationList]);

  const handleCloseClick = (id: number) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });

    setList(newList);
  };

  const renderList = list.map(
    ({ id, type, color, description }: NotificationItem) => {
      return (
        <Notification
          key={id}
          id={id}
          title={type}
          color={color}
          handleCloseClick={handleCloseClick}
        >
          {description}
        </Notification>
      );
    }
  );

  return <Container>{renderList}</Container>;
};

export default NotificationContainer;
