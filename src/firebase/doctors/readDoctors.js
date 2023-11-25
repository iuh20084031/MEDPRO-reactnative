import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllDoctors = (callback) => {
  const database = getDatabase();
  const doctorsRef = ref(database, 'doctors');

  onValue(doctorsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const doctorsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(doctorsArray);
    } else {
      callback([]);
    }
  });
};