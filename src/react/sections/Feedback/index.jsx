import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import decor_img from '@images/decor-1.png';
import { Input, Textarea } from '@ui';
import { setValidObj } from './scripts';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function Feedback(props) {
	const [formValid, setFormValid] = useState({
		name: true,
		phone: true,
		mail: true,
		message: true,
	});

	const [requestLoad, setRequestLoad] = useState(false);



	const inpNameData = {
		placeholder: 'Ваше имя',
		icon: 'person',
		valid: formValid.name,
		name: 'name',
		maxLength: 34,
		onFocus: () => setFormValid(prev => ({ ...prev, name: true }))
	}

	const inpPhoneData = {
		placeholder: 'Номер телефона',
		mask: "+7 999 999 99-99",
		icon: 'phone',
		type: 'tel',
		valid: formValid.phone,
		name: 'phone',
		onFocus: () => setFormValid(prev => ({ ...prev, phone: true }))
	}

	const inpMailData = {
		className: cls.feedback__mail,
		placeholder: 'Электронная почта',
		icon: 'email',
		valid: formValid.mail,
		name: 'mail',
		maxLength: 200,
		onFocus: () => setFormValid(prev => ({ ...prev, mail: true }))
	}

	const inpMessageData = {
		className: cls.feedback__textarea,
		placeholder: 'Ваше сообщение',
		icon: 'message',
		valid: formValid.message,
		name: 'message',
		maxLength: 1000,
		onFocus: () => setFormValid(prev => ({ ...prev, message: true }))
	}



	async function formSend(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const validObj = setValidObj(formData);
		setFormValid(validObj);
		const userId = window.localStorage.getItem("portfolio-user-id");
		(userId) && (formData.set("id", userId));

		let formIsValid = true;
		for (const key in validObj) { (validObj[key] === false) && (formIsValid = false); }

		if (!formIsValid) {
			console.log('not valid')
			return
		}

		setRequestLoad(true);


		const url = 'https://portfolio-backend-dusky.vercel.app/send-message';
		const headers = { "Content-Type": 'multipart/form-data' }
		const request = axios({ url, headers, method: 'post', data: formData })
			.then(res => {
				console.log(res.data);
				const resId = res.data?.data?.id;
				if (resId) window.localStorage.setItem("portfolio-user-id", resId);
			})
			.catch(err => console.log(err))
			.finally(e => setRequestLoad(false));


		toast.promise(
			request,
			{
				pending: 'Отправка данных',
				success: 'Ваше сообщение отправлено!',
				error: 'Ошибка!'
			}
		)

	}



	return (<>
		<section id='feedback' className={cls.feedback}>
			<div className={classNames(['container', cls.feedback__grid])}>
				<h2 className={classNames(['title', cls.feedback__title])}>Связаться со мной</h2>

				<form className={cls.feedback__form} autoComplete='off' onSubmit={formSend} >
					<Input {...inpNameData} />
					<Input {...inpPhoneData} />
					<Input {...inpMailData} />
					<Textarea {...inpMessageData} />
					<button disabled={requestLoad} type='submit' className="form-btn">Отправить</button>
				</form>

				<img src={decor_img} className={cls.feedback__decor} />
			</div>
		</section>

		<ToastContainer />
	</>);
}

export default Feedback;