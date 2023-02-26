import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const initialValue = {
  username: '',
  email: '',
  age: '',
};

const schema = yup.object({
  username: yup.string().required().lowercase().min("2").max("20").trim(),
  email: yup.string().email().required().max("50"),
  age: yup.number().positive().required().integer(),
});

function AdoptionForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
    formState,
  } = useForm({
    mode: 'onChange',
    defaultValues: initialValue,
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    console.log('formState', formState);
    console.log('errors', errors);
  });

  useEffect(() => {
    setTimeout(() => {
      reset(initialValue);
    }, 1000);
  }, []);

  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form className="pet-form" onSubmit={handleSubmit(submitHandler)}>
     
      <label>username</label>
      <input type="text" {...register('username')} />
      {errors.username && <span>{errors.username.message}</span>}

      <label>email</label>
      <input type="email" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <label>age</label>
      <input type="number" {...register('age')} />
      {errors.age && <span>{errors.age.message}</span>}

      <button type="reset" style={{ border: `1px solid black` }}>
        reset
      </button>
      <button type="submit" style={{ border: `1px solid black` }}>
        submit
      </button>
    </form>
  );
}

export default AdoptionForm;
