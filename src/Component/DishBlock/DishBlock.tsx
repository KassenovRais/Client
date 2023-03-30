import Button  from '../UI/Button/Button';
import React from 'react';
import { StateProps } from '../../Interface/Interface'
import styles from './DishBlock.module.css'

interface DishBlockProps {
	props: StateProps;
	onClick: () => void
	clickHandlerAddDish :() => void
}


const DishBlock = ({props , onClick ,clickHandlerAddDish}:DishBlockProps) => {
	return (
		<div className={styles.dish} key={props.id} >
			<img src={props.image} className={styles.dishPic} />
			<h3 className={styles.titleDish}>{props.title} <span>{ props.price}</span></h3>
			{
				props.showHandler? <p className={styles.description} >{ props.description}</p> : null

			}
			<Button
				onClick={onClick}
				disabled={false}
				styles={styles.BTN}
			>
				{
					props.showHandler ? 'HIDE' : 'SHOW'
				}
			</Button>
			<Button
				onClick={clickHandlerAddDish}
				disabled={false}
				styles={styles.BTN}
			>
				ADD DISH
			</Button>
		</div>
	);
};

export default DishBlock;