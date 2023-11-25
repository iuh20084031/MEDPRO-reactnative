import { getDatabase, ref, push, set } from 'firebase/database';

const database = getDatabase();

export const saveAppointment = (patient, hospital, department, doctor, time) => {
  // Sử dụng push thay vì set để Firebase tự động tạo id mới
  const appointmentsRef = ref(database, 'appointments');
  const newAppointmentRef = push(appointmentsRef);

  set(newAppointmentRef, {
    patientName: patient.patienName,
    patientCode: patient.patientCode,
    patientDob: patient.dob,
    patientMale: patient.male,
    patientAddress: patient.address,
    patientPassport: patient.passport,
    patientBhyt: patient.bhyt,
    patientProfession: patient.profession,
    patientPhone: patient.phone,
    patientEmail: patient.email,
    hospitalName: hospital.name,
    departmentName: department.name,
    doctorName: doctor.name,
    price: doctor.price,
    date: time,
  })
    .then(() => {
      console.log('Appointments record saved successfully!');
    })
    .catch((error) => {
      console.error('Error saving appointments record: ', error);
    });
};