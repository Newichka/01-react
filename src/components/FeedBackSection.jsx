import React from "react";
import { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import Button from "./Button/Button.jsx";
import '../index.css'



export default function FeedBackSection(){
    const { register, handleSubmit,formState:{ errors } } = useForm({
        mode: "onChange",
        // defaultValues:{
        //     'name': 'Я'
        // }
    });

    const onSubmit = data =>{
        console.log(data)
    }



    return(
        <section>
            <h3>Обратная связь</h3>


            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="div_form">
                    <input {...register('name', { required: 'Необходимо заполнить', })} placeholder="Ваше имя" />
                    {errors.name && <p className="p_form">{errors.name.message}</p>}
                </div>

                <div className="div_form">
                    <input {...register('email', { required: true })} placeholder="Ваш email" />
                    {errors.email && <p className="p_form">Это поле обязательно для заполнения</p>}
                </div>
                <div className="div_form">
                    <textarea {...register('message', { required: true })} placeholder="Ваше сообщение" />
                    {errors.message && <p className="p_form">Это поле обязательно для заполнения</p>}
                </div>
                <Button type="submit">Отправить</Button>
            </form>

         
        </section>
    )
}