import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
    const {  loginEmail, error,  signInUsingGoogle } = useAuth();
    const onSubmit = data => {
        const {email, password} = data;
        loginEmail(email, password);
       
    }
 
    return (
      <div className="container bg-light my-5">
      <h2 className="pt-5">Sign In</h2>
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
       <button type="submit" className="btn btn-info mb-4">Login</button>
       <p>Or Sign IN with </p>
       <button className="btn btn-danger" onClick={ signInUsingGoogle}> Google SignIN</button>
     <p className="pb-4">New User?  <Link to="/register">Sign Up</Link> </p>

        
</form>
  </div>
    );
};

export default Login;

