import { getDatabase, ref, push, set, update, remove } from 'firebase/database';

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

export const deleteAppointment = async (appointmentId) => {
  const database = getDatabase();
  const appointmentsRef = ref(database, 'appointments/' + appointmentId);

  try {
    await remove(appointmentsRef);
    console.log('Appointment record deleted successfully!');
  } catch (error) {
    console.error('Error deleting appointment record: ', error);
  }
};

export const updateAppointment = async (appointmentId, updatedAppointmentData) => {
  const database = getDatabase();
  const appointmentsRef = ref(database, 'appointments/' + appointmentId);

  try {
    await update(appointmentsRef, {
      patientName: updatedAppointmentData.patientName,
      patientCode: updatedAppointmentData.patientCode,
      patientDob: updatedAppointmentData.patientDob,
      patientMale: updatedAppointmentData.patientMale,
      patientAddress: updatedAppointmentData.patientAddress,
      patientPassport: updatedAppointmentData.patientPassport,
      patientBhyt: updatedAppointmentData.patientBhyt,
      patientProfession: updatedAppointmentData.patientProfession,
      patientPhone: updatedAppointmentData.patientPhone,
      patientEmail: updatedAppointmentData.patientEmail,
      hospitalName: updatedAppointmentData.hospitalName,
      departmentName: updatedAppointmentData.departmentName,
      doctorName: updatedAppointmentData.doctorName,
      price: updatedAppointmentData.price,
      date: updatedAppointmentData.date,
    });
    console.log('Appointment record updated successfully!');
  } catch (error) {
    console.log(updatedAppointmentData)
    console.error('Error updating appointment record: ', error);
  }
};
