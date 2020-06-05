// write your custom hook here to control your checkout form
// write your custom hook here to control your checkout form
import {useFormLocalStorage} from "./useFormLocalStorage"

export const useForm=(key, initialValue)=>{
 
    const [values,setValues]=useFormLocalStorage(key,initialValue)

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      return [values, handleChanges]

}