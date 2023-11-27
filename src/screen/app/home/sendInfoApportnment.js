import emailjs from 'emailjs-com';

export const sendEmail = (appointment) => {
    const patientInfo = `
    THÔNG TIN BỆNH NHÂN
    Họ và tên: ${appointment.patientName}
    Mã số bệnh nhân: ${appointment.patientCode}
    Ngày sinh: ${appointment.patientDob}
    Giới tính: ${appointment.patientMale}
    Địa chỉ: ${appointment.patientAddress}
    CCCD/Passport:${appointment.patientPassport}
    Mã bảo hiểm y tế: ${appointment.patientBhyt}
    Nghề nghiệp: ${appointment.patientProfession}
    Số điện thoại: ${appointment.patientPhone}
    Nơi khám: ${appointment.hospitalName}
    Chuyên khoa: ${appointment.departmentName}
    Bác sĩ khám: ${appointment.doctorName}
    Giá khám: ${appointment.price}đ
    Thời gian khám: ${appointment.date}
    Thời gian đặt khám : ${Date.now().toString()}
  `; 
    const templateParams = {
        to_name: appointment.patientEmail,
        from_name: 'Medpro',
        message: patientInfo,
    };
    emailjs.send(
        'service_g78lgq7',
        'template_e9znqpe',
        templateParams,
        'vZYnOSE7z1CI_Urmz',
    )
        .then((response) => {
            console.log('Email sent successfully:', response);
        })
        .catch((error) => {
            console.error('Email failed to send:', error);
        });
};
