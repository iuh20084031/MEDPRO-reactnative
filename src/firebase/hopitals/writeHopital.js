import { app } from "../FirebaseAuth";
import { getDatabase, ref, push, set } from 'firebase/database';

const database = getDatabase();

// Hàm để lưu thông tin bệnh viện
export const saveHospital = (id, name, address, rate, image) => {
    set(ref(database, 'hospitals/' + id), {
        name: name,
        address: address,
        rate : rate,
        image : image
      })
      .then(() => {
        console.log('Hospital saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving hospital:', error.message);
      });
  };
 /*  useEffect(() => {
    for (let i = 2; i < 50; i++) {
      saveHospital(i, 'Bệnh viện XYZ '+i, '456'+i+' Đường ABC, Hà Nội', 4.2, 'https://th.bing.com/th/id/R.036b033a1e414bab9fa2cc8305c9a767?rik=gUxkE%2f9IfNPHpw&pid=ImgRaw&r=0');
    }
  }, []) */
