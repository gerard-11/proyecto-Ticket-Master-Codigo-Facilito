
import {useForm} from "react-hook-form";

const SignUpForm=()=>{
    const {register,handleSubmit,reset,formState: { errors } }=useForm();

    const handleClearClick=()=>{
    reset()
    }

    const handleFormSubmit=(data)=>{
     console.log(data)
    }
console.log(errors)
    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <label>name
                <input {...register('name',{required: true})}  />
            </label>
            <label>Age
            <input {...register('Age',{required: true})} />
            </label>
            <label>Address
            <input {...register('Address',{required: true})} />
            </label>
            <label>Phone number
            <input{...register('Phone',{required: true})} />
            </label>
            <div>
                <button type='submit'>Submit</button>
                <button type='button' onClick={handleClearClick}>Clear</button>
            </div>
        </form>
    )
}

export default SignUpForm