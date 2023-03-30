import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { AppDispatch, RootState } from '../../index';
import { showHandlerDescription, GetDataMenu } from '../../Store/reducer'
import Modal from '../../Container/Modal/Modal'
import { addDishInOrder } from '../../Store/order'
import {arrDishMenu , DishOrder} from '../../Interface/Interface'
import DishBlock from '../DishBlock/DishBlock'
import BackDrop from '../UI/Backdrop/BackDrop';
import styles from './Main.Menu.module.css'


const MainMenu = () => {

	const arrMenu = useSelector<RootState, arrDishMenu>(state => state.menu)
	const showHandler = useSelector<RootState, DishOrder>(state => state.order)

	const dispatch = useDispatch<AppDispatch>();
	
	useEffect(() => {
		dispatch(GetDataMenu())

		
		
	},[dispatch])
	return (
		<>
			<div>
				{
					arrMenu.arrState.map((e , index) => {
						return <DishBlock key={e.id}
							props={e}
							onClick={() => dispatch(showHandlerDescription(index))}
							clickHandlerAddDish={() => dispatch(addDishInOrder(e))}

						/>

					})
				}
			
			</div>
			{
				!showHandler.showFormForOrder? null : <Modal/>
			}
			{
				arrMenu.isLoading ? <BackDrop>
					<div className={styles.loader}></div>
				</BackDrop> : null
			}
		</>
	);
};

export default MainMenu;