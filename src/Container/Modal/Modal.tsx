import React, { ChangeEvent, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Axios from '../../API/APi'
import { AxiosRequestConfig  , AxiosResponse} from 'axios';
import { AppDispatch, RootState } from '../../index';
import { FormProps, DishOrder } from '../../Interface/Interface'
import {showModal} from '../../Store/order'
import Input from '../../Component/UI/Input/Input'
import Button from '../../Component/UI/Button/Button'
import BackDrop from '../../Component/UI/Backdrop/BackDrop';
import styles from './Modal.module.css'
 



const Modal = () => {
	const orderValue = useSelector<RootState, DishOrder>(state => state.order)

    const dispatch = useDispatch<AppDispatch>();

	const [valueForm, setValueForm] = useState<FormProps>({
		name: '',
		adress: '',
		disabled: true
	})

	const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
		const {name , value} = e.target

		setValueForm({ ...valueForm , [name] : value})
	}
	const CreateOrderInFB = async () => {
		try {
			await Axios.post<AxiosRequestConfig, AxiosResponse>('orders.json', {
				UserData: {
					name: valueForm.name,
					adress: valueForm.adress
				},
				order: orderValue.dish,
				totalPrice:orderValue.totalPrice
			})
		} finally {
			dispatch(showModal())

		}
	}
	useEffect(() => {
		if (valueForm.adress.trim() !== '' && valueForm.name.trim() !== '' ) {
			setValueForm({...valueForm , disabled:false})
		} else {
			setValueForm({...valueForm , disabled:true})

		}
	}, [valueForm.adress , valueForm.name])
	return (
		<BackDrop>
			<div className={styles.modal}>
				
					<Input
						styles={styles.enter}
						onChange={(e) => changeValue(e)}
						value={valueForm.name}
						placeholder='YOUR NAME'
						name='name'
						type='stirng'
					/>
					<Input
						styles={styles.enter}
						onChange={(e) => changeValue(e)}
						value={valueForm.adress}
						placeholder='YOUR ADRESS'
						name='adress'
						type='stirng'
					/>
					
				<div className={styles.buttonBlock} >
					<Button
							onClick={() => {
								dispatch(showModal())
							}}
							
							styles={styles.BTN}
							disabled={false} >
							CANCEL
					</Button>
						<Button
						onClick={() => {
							CreateOrderInFB()
						}}
							
							styles={styles.BTN}
							disabled={valueForm.disabled} >
							SAVE
					</Button>
						
					</div>
				
			
			</div>
		</BackDrop>
		
	);
};

export default Modal;