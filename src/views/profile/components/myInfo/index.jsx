import {useForm} from 'react-hook-form'
import style from './MyInfo.module.css'
import {useEffect} from "react";
const MyInfo=()=>{
    const{handleSubmit,register,formState:{errors}, setValue}=useForm()
    const handleFormSubmit=(data)=>{
        try{
            localStorage.setItem('userData', JSON.stringify(data))
            alert('usuario actualizado')
        }catch(error){
            alert('error')
        }
    }
    useEffect(()=>{
        try{
            const userData=JSON.parse(localStorage.getItem('userData'))
            setValue('name',userData?.name)
            setValue('email',userData?.email)
            setValue('age',userData?.age)

        }catch(error){
            console.log('error')
        }
    },[])
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} className={style.form}>
            <label>name
                <input {...register('name',{required: true, minLength:3, maxLength:50})} />
            </label>
            <label>Email
                <input {...register('email',{required: true,minLength:3, maxLength:100})}  />
            </label>
            <label>Age
            <input type='number' {...register('age',{required: true, min:1, max:100, valueAsNumber:true})}  />
        </label>
            <button type='submit'
            className={style.submitButton}
            onSubmit={handleFormSubmit}>Save</button>
        </form>
    )
}

export default MyInfo;