import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@hooks';
const AllIcons = import.meta.glob('@icons/*.svg', { eager: true });
import InputMask from 'react-input-mask';


function Input(e) {
	const {
		classes = '',
		fullWidht = true,
		valid = false,
		icon = null,
		placeholder = null,
		onChange,
		onFocus,
		onBlur,
		className = '',
		type = 'text',
		...props
	} = e;

	const icons = useGallery(AllIcons)?.obj;

	const [inpValue, setInpValue] = useState('');
	const [inpFocus, setInpFocus] = useState(false);
	const [inpEmpty, setInpEmpty] = useState(true);
	const [inpValid, setInpValid] = useState(true);


	useEffect(() => {
		const regEx = /^(?=\s*$)/g;
		let exist = regEx.test(inpValue);
		setInpEmpty(exist);
	}, [inpValue])

	useEffect(() => {
		setInpValid(valid);
	}, [valid])


	const wrapProps = {
		"data-valid": inpValid,
		className: classNames([cls.input, className]),
		style: {
			maxWidth: fullWidht ? '100%' : '300px',
		},
		"data-focus": inpFocus,
		"data-empty": inpEmpty,
	};

	const inputProps = {
		type,
		onFocus: funcFocus,
		onBlur: funcBlur,
		value: inpValue,
		onChange: funcChange,
		autoComplete: 'new-password'
	};

	// funcs

	function funcFocus(params) {
		setInpFocus(true);
		if (onFocus) onFocus(params);
	}

	function funcBlur(params) {
		setInpFocus(false);
		if (inpEmpty) setInpValue('');
		if (onBlur) onBlur(params);
	}

	function funcChange(params) {
		setInpValue(params.target.value);
		if (onChange) onChange(params);
	}



	return (<>
		<label  {...wrapProps}  >
			{icons[`${icon}.svg`] && <img src={icons[`${icon}.svg`]} />}
			{placeholder && <p>{placeholder}</p>}

			<InputMask {...props} {...inputProps} maskChar={null} />
		</label>
	</>);
}

export default Input;