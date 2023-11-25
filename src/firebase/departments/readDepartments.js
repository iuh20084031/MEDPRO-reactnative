import { getDatabase, ref, onValue } from 'firebase/database';

export const getAllDepartments = (callback) => {
  const database = getDatabase();
  const departmentRef = ref(database, 'departments');

  onValue(departmentRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const departmentsArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      callback(departmentsArray);
    } else {
      callback([]);
    }
  });
};