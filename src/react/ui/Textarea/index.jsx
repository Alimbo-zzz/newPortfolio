import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@hooks';
const AllIcons = import.meta.glob('@icons/*.svg', { eager: true });


function Textarea(e) {
	const {
		classes = '',
		fullWidht = true,
		icon = null,
		placeholder = null,
		className = '',
		onChange,
		onFocus,
		onBlur,
		value = '',
		valid = true,
		...props
	} = e;

	const icons = useGallery(AllIcons)?.obj;

	const [textValue, setTextValue] = useState(value);
	const [textFocus, setTextFocus] = useState(false);
	const [textEmpty, setTextEmpty] = useState(true);
	const [textValid, setTextValid] = useState(valid);


	useEffect(() => {
		const regEx = /^(?=\s*$)/g;
		let exist = regEx.test(textValue);
		setTextEmpty(exist);
	}, [textValue])

	useEffect(() => {
		setTextValid(valid);
	}, [valid])


	useEffect(() => {
		setTextValue(value);
	}, [value])


	const wrapProps = {
		"data-valid": textValid,
		className: classNames([cls.textarea, className]),
		style: {
			maxWidth: fullWidht ? '100%' : '300px',
		},
		"data-focus": textFocus,
		"data-empty": textEmpty,
	};

	const textProps = {
		type: "text",
		onFocus: funcFocus,
		onBlur: funcBlur,
		value: textValue,
		onChange: funcChange,
		autoComplete: 'off'
	};

	// funcs

	function funcFocus(params) {
		setTextFocus(true);
		if (onFocus) onFocus(params);
	}

	function funcBlur(params) {
		setTextFocus(false);
		if (textEmpty) setTextValue('');
		if (onBlur) onBlur(params);
	}

	function funcChange(params) {
		setTextValue(params.target.value);
		if (onChange) onChange(params);
	}



	return (<>
		<label  {...wrapProps}  >
			{(icons || placeholder) && (
				<div className={cls.textarea__head}>
					{icons[`${icon}.svg`] && <img src={icons[`${icon}.svg`]} />}
					{placeholder && <p>{placeholder}</p>}
				</div>
			)}
			<textarea {...props} {...textProps}></textarea>
		</label>
	</>);
}

export default Textarea;