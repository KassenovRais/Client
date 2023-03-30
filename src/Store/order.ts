import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StateProps, DishOrder  } from '../Interface/Interface'


const orderDishApplication: DishOrder = {
	dish: [],
	totalPrice: 150,
	disabledHandler: true,
	showFormForOrder:false
}

const OrderDish = createSlice({
	name: 'order',
	initialState:orderDishApplication,
	reducers: {
		addDishInOrder: (state, action: PayloadAction<StateProps>) => {
			const index = state.dish.findIndex(el => el.title === action.payload.title)
			if (index >= 0) {
				state.dish[index].amount += 1
				state.dish[index].price +=  action.payload.price
				state.disabledHandler = false
				state.totalPrice  += action.payload.price
			} else {
				state.dish = [...state.dish, {
					title: action.payload.title,
					price: action.payload.price,
					amount: 1
				}]
				state.totalPrice = state.totalPrice += action.payload.price
				state.disabledHandler = false

			}
		},
		showModal: (state) => {
			return state = {...state, showFormForOrder: !state.showFormForOrder}	
		},
		changeDisableCreate: (state) => {
			return state = {...state ,disabledHandler: true}
		},
		removeDishInOrder: (state , action: PayloadAction <number>) => {
			const sum = state.totalPrice -= state.dish[action.payload].price
			state = {
				totalPrice: sum,
				dish: state.dish.splice(action.payload, 1),
				disabledHandler: state.disabledHandler,
				showFormForOrder: false
				
			}
		
		},
		
	}
})



export  const {addDishInOrder , removeDishInOrder , showModal , changeDisableCreate} = OrderDish.actions
export default OrderDish.reducer