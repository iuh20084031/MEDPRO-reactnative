import { getDatabase, ref, set } from 'firebase/database'

const database = getDatabase();

export const saveDepartment = (id, name) => {
    set(ref(database, 'departments/'+ id),{
        name : name,
    })
    .then(()=> {
        console.log('department record saving successfully !');
    })
    .catch((error)=>{
        console.log('Error saving department record : ', error)
    });
}

 /*  useEffect(() => {
    for (let i = 2; i < 50; i++) {
      saveDepartment(i, 'Khoa răng hàm mặt '+i);
    }
  }, []) */