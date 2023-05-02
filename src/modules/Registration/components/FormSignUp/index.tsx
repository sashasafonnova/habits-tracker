import React from 'react';
import styles from "./styles.module.css";
import HaveAccount from '../../../../components/HaveAccount';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { fetchMessageSelector, fetchUserData } from '../../../../redux/slices/authSlice';

import { SubmitHandler, useForm } from 'react-hook-form';


import { FormValues } from '../../types';
import { useNavigate } from 'react-router-dom';





export const FormSignUp: React.FC = () => {

   const fetchMessage = useAppSelector(fetchMessageSelector);


   const dispatch = useAppDispatch();
   const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors }, reset } = useForm <FormValues>({ mode: "onBlur" });


   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      reset();

      const fetchResult = await dispatch(fetchUserData({
         ...data,
         path: '/registration'
      }))

      if (fetchUserData.fulfilled.match(fetchResult)) {
         const token = fetchResult.payload.token;
         window.localStorage.setItem('token', JSON.stringify(token))
         return navigate('/account');
      }
   }


 
   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Регистрация</h1>
         <p className={fetchMessage ? `${styles.subtitle} ${styles.fetchError}` : styles.subtitle}>{fetchMessage ? fetchMessage : 'Введите данные для входа'}</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputContainer}>
               <label className="dsp-none" htmlFor="firstName">Имя</label>

               <input
                  className={errors?.firstName ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="firstName"
                  type="text"
                  placeholder="Иван"
                  {...register("firstName", {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^[а-яА-яa-zA-Z]+$/,
                        message: "*некорректное имя",
                     }
                  })}
               />
               {errors?.firstName && <div className={styles.error}>{errors.firstName.message}</div>}
            </div>
            <div className={styles.inputContainer}>
               <label className="dsp-none" htmlFor="email">E-mail</label>
               <input
                  className={errors?.email ? `${styles.input} ${styles.inputError}` : styles.input}
                  type="email"
                  id="email"
                  placeholder="mail@mail.ru"
                  {...register('email', {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                        message: "*введите корректный e-mail",
                     }
                  })}
               />
               {errors?.email && <div className={styles.error}>{errors.email.message}</div>}
            </div>
            <div className={styles.inputContainer}>
               <label className="dsp-none" htmlFor="password">Пароль</label>
                             <input
                  className={errors?.password ? `${styles.input} ${styles.inputError}` : styles.input}
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  {...register("password", {
                     required: "*обязательное поле",
                     pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: "*минимум 8 символов (1 буква и 1 цифра)",
                     }
                  })}
               />
               {errors?.password && <div className={styles.error}>{errors.password.message}</div>}
            </div>
            <div className={styles.btns}>
               <button type='submit' className={styles.btnSubmit}>Создать аккаунт</button>
            </div>
            
         </form> 
         <HaveAccount text='Уже есть аккаунт?' action='Войти' path='/login' />

      </div>       
   );
}

