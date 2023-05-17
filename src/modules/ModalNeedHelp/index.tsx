import React from "react";
import styles from "./styles.module.css";
import { useForm, SubmitHandler } from "react-hook-form";


export interface FormValues {
   firstName: string,
   email: string;
};


interface ModalNeedHelpProps {
   setModalNeedOpen: (openModal: boolean) => void
}


const ModalNeedHelp: React.FC<ModalNeedHelpProps> = ({ setModalNeedOpen } ) => {

   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ mode: "onBlur" });

   const onClickModalWindow = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
   }




   return (
      <section className={styles.block} onClick={() => setModalNeedOpen(false)}>
         <div className={styles.window}>
            <div className={styles.content} onClick={event => onClickModalWindow(event)}>
               <button className={styles.close} onClick={() => setModalNeedOpen(false)}>X</button>
                  <h2 className={styles.title}>Нужна помощь? Напишите нам</h2>
                  <form className={styles.form}>
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
                    
                  <button className={styles.btnSubmit} onClick={() => reset()}>Отправить</button>

                  </form>   
            </div>
         </div>
      </section>
   );
}

export default ModalNeedHelp;