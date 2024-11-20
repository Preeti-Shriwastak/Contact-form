import React from 'react';
import{ useForm } from 'react-hook-form';
import { useState } from 'react';
import './App.css';

function App() {

  const {register, handleSubmit, formState:{errors}} = useForm();
  const [userInfo, setUserInfo]= useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data); 
  };
  console.log(errors)
  return (
    <div className="form-section">
    <div className="container">
      <pre>{JSON.stringify(userInfo,null,2)}</pre>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title" >Regestration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="">UserName</label>
            <input 
            type="text" 
            name="username" 
            placeholder="Enter Username" 
            {...register('username',{ 
              required:'Username is required'})} />
          </div>
          <p>{errors.username?.message}</p>
          <div className="field">
            <label htmlFor="">Email</label>
            <input 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            {...register('email',{
               required:'Email is Required',
               pattern:{
                value:/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, 
                message:"This is not a valid email"
              }
            })} />
          </div>
          <p>{errors.email?.message}</p>

          <div className="field">
            <label htmlFor="">Password</label>
            <input 
            type="password" 
            name="password"
            placeholder="Enter Password"
            {...register('password',{
             required: 'Password is requires', 
              minLength:{
                value:4, 
                message:"Password must be more than 4 letter"}, 
              maxLength:{
                value: 12, 
                message:"Password must be less then 12 letter"
              }
            })} />
          </div>
          <p>{errors.password?.message}</p>

          <button className="fluid ui button blue">Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default App;
