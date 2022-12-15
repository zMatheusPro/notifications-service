import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: '123',
      category: 'message',
      content: new Content('criando uma notificação'),
    });

    expect(notification).toBeTruthy();
  });
});
