import { getDatabase, ref, set } from 'firebase/database'
import {app} from '../FirebaseAuth'
import { useEffect } from 'react';
import { saveHospital } from '../hopitals/writeHopital';

const database = getDatabase();

export const savePatientRecord = (id, patienName, patientCode, dob, male, passport, bhyt, profession, phone, email, address) => {
    set(ref(database, 'patientRecords/'+ id),{
        patienName : patienName,
        patientCode : patientCode,
        dob : dob,
        male : male,
        passport : passport, 
        bhyt : bhyt, 
        profession : profession,
        phone : phone, 
        email : email, 
        address : address
    })
    .then(()=> {
        console.log('patien record saving successfully !');
    })
    .catch((error)=>{
        console.log('Error saving patient record : ', error)
    });
}

/* useEffect(()=>{
    savePatientRecord(1, "Phạm Nhật Linh", "VIP-20084031", "20/01/2002", "Nam", "044200221139", "2005566789", "Sinh viên", "0906702589", "nhatlinhdev201@gmail.com","Zen tower, Q12, TP HCM");
    savePatientRecord(2, "Phạm Nhật Link", "VIP-20084032", "20/08/2002", "Nam", "044200221139", "2005566789", "Sinh viên", "0906702589", "nhatlinhdev201@gmail.com","Zen tower, Q12, TP HCM");
},[]); */