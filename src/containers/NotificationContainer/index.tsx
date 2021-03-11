import { FunctionComponent, useEffect, useState, useMemo } from 'react';
import { NotificationItem } from './types';
import Notification from '../../components/Notification';
import { Container } from './styles';
import { createPortal } from 'react-dom';

interface NotificationProps {
  notificationList: NotificationItem[] | [];
  position?: string;
}

const NotificationContainer: FunctionComponent<NotificationProps> = ({
  notificationList,
}) => {
  const [list, setList] = useState<NotificationItem[] | []>([]);
  const root = document.getElementById('app-container') as HTMLElement;
  console.log(`THIS IS ${root}`);

  useEffect(() => {
    setList(notificationList);

    // Clean notification container
    return () => {};
  }, [notificationList]);

  const handleCloseClick = (id: number) => {
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];

    newList.splice(index, 1);

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
