import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const Form = () => {
    const schema = yup.object().shape({
        fullName: yup.string().required('Full Name is Required'),
        email: yup.string().email().required('Email is a Required Field'),
        age: yup.number().positive().integer().required('Age must be min 18 and max 99').min(18).max(99),
        password: yup.string().min(4).max(15).required('Password is required to be min 4 characters long and max 15 characters long'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null, 'Password must match']).required(),
    });

    const {register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }; 

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Full Name...' {...register('fullName')}/>
        <p className='errors'> {errors.fullName?.message} </p>
        <input type='text' placeholder='Email...' {...register('email')}/>
        <p className='errors'> {errors.email?.message} </p>
        <input type='number' placeholder='Age...' {...register('age')}/>
        <p className='errors'> {errors.age?.message} </p>
        <input type='password' placeholder='Password...' {...register('password')}/>
        <p className='errors'> {errors.password?.message} </p>
        <input type='password' placeholder='Confirm Password...' {...register('confirmPassword')}/>
        <p className='errors'> {errors.confirmPassword?.message} </p>
        <input type='submit' placeholder='Submit' />
    </form>
);
};