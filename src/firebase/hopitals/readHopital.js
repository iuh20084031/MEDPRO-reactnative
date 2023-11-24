import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllHospitals = (callback) => {
  const database = getDatabase();
  const hospitalsRef = ref(database, 'hospitals');

  onValue(hospitalsRef, (snapshot) => {
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