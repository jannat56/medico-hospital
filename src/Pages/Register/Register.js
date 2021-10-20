
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { registerUsingEmail, error, signInUsingGoogle } = useAuth();
    const onSubmit = data => {
        const {email, password} = data;
        registerUsingEmail(email, password);
       
    }
    return (
        <div className="container bg-light my-5">
            <h2 className="pt-5">Create an Account</h2>
             <form onSubmit={handleSubmit(onSubmit)}>
              <div className="py-5">
              <input placeholder="email" {...register("email", { required: true })} />
              {errors.email && <span>This field is required</span>}
              <br/>
              <br/>
              <input placeholder="password" {...register("password", { required: true })} />
              {errors.password && <span>This field is required</span>}
              <div className="mx-auto text-danger text-center mb-3">

              {error ? error : ""}
              </div>

            </div>
             <button type="submit" className="btn btn-info mb-4">Submit</button>
             <p>Or Sign IN with </p>
       <button className="btn btn-danger" onClick={ signInUsingGoogle}> Google SignIN</button>
     <p className="pb-4">already Registered?  <Link to="/login">Sign In</Link> </p>

              
    </form>
        </div>
    );
};

export default Register;