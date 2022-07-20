import { useState } from "react";

export const useRegister = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { name, email, password, confirmPassword } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return { name, email, password, confirmPassword, onSubmit, onChange };
};
