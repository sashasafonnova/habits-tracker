import React from 'react';
import styles from "./styles.module.css";

import HaveAccount from '../../../../components/HaveAccount';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux-hooks';
import { SubmitHandler, useForm } from 'react-hook-form';
import { fetchMessageSelector, fetchUserData } from '../../../../redux/slices/authSlice';
import { FormValues } from '../../types';
import { useNavigate } from 'react-router-dom';





export const FormSignIn: React.FC = () => {

   
   const fetchMessage = useAppSelector(fetchMessageSelector);
   const navigate = useNavigate();


   const dispatch = useAppDispatch();
   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ mode: "onBlur" });



   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      reset();

      const fetchResult = await dispatch(fetchUserData({
         ...data,
         path: '/login'
      }))   


      if (fetchUserData.fulfilled.match(fetchResult)) {
         window.localStorage.setItem('token', fetchResult.payload.token)
         return navigate('/account');
      }
   }


   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Вход</h1>
         <p className={fetchMessage ? `${styles.subtitle} ${styles.fetchError}` : styles.subtitle}>{fetchMessage ? fetchMessage : 'Введите логин и пароль'}</p>
         
         <form onSubmit={handleSubmit(onSubmit)}>
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
               <button type='submit' className={styles.btnSubmit}>Отправить</button>
            </div>
            
         </form> 
         <HaveAccount text='Нет аккаунта?' action='Создать' path='/registration' />

      </div>       
   );
}
