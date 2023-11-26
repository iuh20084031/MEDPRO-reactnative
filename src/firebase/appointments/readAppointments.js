import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllAppointments = (callback) => {
    const database = getDatabase();
    const appointmentsRef = ref(database, 'appointments');

    onValue(appointmentsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const appointmentsArray = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));
            callback(appointmentsArray);
        } else {
            callback([]);
        }
    });
};