import React, { ReactNode } from 'react';
import styles from './BackDrop.module.css'

interface BackDropProps {
	children:ReactNode
}

const BackDrop = ({children}:BackDropProps) => {
	return (
		<div className={styles.backdrop} >
			{children}
		</div>
	);
};

export default BackDrop;