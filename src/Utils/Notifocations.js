import { notification } from 'antd';
export const openNotification = (title) => {
    notification.open({
      message: title
    });
  };