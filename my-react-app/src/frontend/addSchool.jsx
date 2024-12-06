import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from "react-router-dom";
import './addSchool.module.css'


const schema = yup.object().shape({
  name: yup.string().required('School name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  image: yup.mixed().required('School image is required'),
});

const AddSchool = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('city', data.city);
    formData.append('email', data.email);
    formData.append('image', data.image[0]);

    try {
      await axios.post('/api/addSchool.js', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('School added successfully!');
    } catch (error) {
      console.error(error);
      alert('Error adding school.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className='formContent'>
        <label className='heading'>School Name</label>
        <input {...register('name')} />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label className='heading'>Address</label>
        <textarea {...register('address')} />
        <p>{errors.address?.message}</p>
      </div>
      <div>
        <label className='heading'>City</label>
        <input {...register('city')} />
        <p>{errors.city?.message}</p>
      </div>
      <div>
        <label className='heading'>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label className='heading'>School Image</label>
        <input type="file" {...register('image')} />
        <p>{errors.image?.message}</p>
      </div>
     <button> < Link to="/ShowSchool" type="submit">Add School</Link ></button>
    </form>
  );
};

export default AddSchool;
