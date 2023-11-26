import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllNotifications = (callback) => {
    const database = getDatabase();
    const notificationsRef = ref(database, 'notifications');

    onValue(notificationsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const hospitalsArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            callback(hospitalsArray);
        } else {
            callback([]);
        }
    });
};