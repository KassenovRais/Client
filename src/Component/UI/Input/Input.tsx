import React, { ChangeEvent } from 'react';

interface InputProps {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	styles: string;
	name: string;
	type:string
}

const Input = ({
	value,
	onChange,
	placeholder,
	styles,
	name,
	type
}: InputProps) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={styles}
		/>
	);
};

export default Input;