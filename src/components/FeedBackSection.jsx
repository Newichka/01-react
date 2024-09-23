import React from "react";
import { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import Button from "./Button/Button.jsx";
import '../index.css'



export default function FeedBackSection(){
    const { register, handleSubmit,formState:{ errors } } = useForm({
        mode: "onChange",
        defaultValues:{
            'name': 'Я'
        }
    });

    const onSubmit = data =>{
        console.log(data)
    }



    return(
        <section>
            <h3>Обратная связь</h3>


            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input {...register('name', { required: 'Надо заполнить', })} placeholder="Ваше имя" />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>

                <div>
                    <input {...register('email', { required: true })} placeholder="Ваш email" />
                    {errors.email && <p>Это поле обязательно для заполнения</p>}
                </div>
                <div>
                    <textarea {...register('message', { required: true })} placeholder="Ваше сообщение" />
                    {errors.message && <p>Это поле обязательно для заполнения</p>}
                </div>
                <Button type="submit">Отправить</Button>
            </form>

         
        </section>
    )
}