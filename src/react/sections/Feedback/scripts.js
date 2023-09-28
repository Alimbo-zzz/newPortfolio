
export {
	setValidObj,
}





function setValidObj(formData) {
	let dataObj = {};
	for (const key of formData) { dataObj[key[0]] = key[1] };

	const isEmpty = /^\s*$/;
	const isMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	const isUserName = /^[a-z0-9_]+$/i;
	const isPhone = dataObj.phone.replaceAll('-', '').replaceAll(' ', '').length === 12

	return (
		{
			name: !isEmpty.test(dataObj.name),
			phone: isPhone,
			mail: isMail.test(dataObj.mail),
			message: !isEmpty.test(dataObj.message),
		}
	);
};