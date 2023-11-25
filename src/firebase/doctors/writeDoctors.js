import { getDatabase, ref, set } from 'firebase/database'

const database = getDatabase();

export const saveDoctor = (id, name, male, department, date, price) => {
    set(ref(database, 'doctors/'+ id),{
        name : name,
        male : male,
        department : department,
        date : date,
        price : price
    })
    .then(()=> {
        console.log('doctors record saving successfully !');
    })
    .catch((error)=>{
        console.log('Error saving doctors record : ', error)
    });
}

 /*  useEffect(() => {
    for (let i = 2; i < 50; i++) {
      saveDepartment(i, 'Khoa răng hàm mặt '+i);
    }
  }, []) */