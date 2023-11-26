import { getDatabase, ref, push, set, update, remove } from 'firebase/database';

const database = getDatabase();

export const saveNotifications = (notification) => {
    // Sử dụng push thay vì set để Firebase tự động tạo id mới
    const notificationsRef = ref(database, 'notifications');
    const newNotificationRef = push(notificationsRef);

    set(newNotificationRef, {
        title: notification.title,
        date: notification.date,
        categories: notification.categories,
        image: notification.image,
    })
        .then(() => {
            console.log('Appointments record saved successfully!');
        })
        .catch((error) => {
            console.error('Error saving appointments record: ', error);
        });
};

