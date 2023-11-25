import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllPatientRecords = (callback) => {
  const database = getDatabase();
  const patientRecordRef = ref(database, 'patientRecords');

  onValue(patientRecordRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const patientRecordsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(patientRecordsArray);
    } else {
      callback([]);
    }
  });
};