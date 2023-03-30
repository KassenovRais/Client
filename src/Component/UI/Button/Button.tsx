import React, { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick: () => void;
	disabled: boolean;
	styles:string
}

const Button = ({children , onClick , disabled , styles }:ButtonProps) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={styles}
		>
			{ children}
		</button>
	);
};

export default Button;