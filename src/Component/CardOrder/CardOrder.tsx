import React , {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from '../../index';
import { DishOrder } from '../../Interface/Interface'
import {URLBackground} from '../../API/URL'
import {removeDishInOrder, showModal, changeDisableCreate } from '../../Store/order'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../UI/Button/Button'
import styles from './CardOrder.module.css'



const CardOrder = () => {

	const arrDishOrder = useSelector<RootState, DishOrder>(state => state.order)
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (arrDishOrder.totalPrice === 150) {
			dispatch(changeDisableCreate())
		}

	},[arrDishOrder.totalPrice])
	
	return (
			<>
							
				 <video id={styles.backgroundVideo} autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
				<source src={URLBackground} type="video/mp4" />
				</video> 
			<div className={styles.orderBlock}>
				{
					arrDishOrder.dish.map((e , index) => {
						return <div key={index}>
							<h3 className={styles.dishTitle}
								onClick={() => {
									dispatch(removeDishInOrder(index))

								}}
							>{e.title} <span>  {e.amount}</span> <span>{ e.price}</span></h3>
							
						</div>


					})
				}
				<h3>Delivery:  150</h3>
				<h3>{arrDishOrder.totalPrice}</h3>
				<Button
					styles={styles.BTNCreate}
					disabled={arrDishOrder.disabledHandler}
					onClick={() => {
						dispatch(showModal())
					}}
				>Create Order</Button>
			</div> 
			
		</>
	);
};

export default CardOrder;