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

  const handleCloseClick = (id: number) => {
    const index = list.findIndex((item) => item.id === id);
    list.splice(index, 1);
    setList([...list]);
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
