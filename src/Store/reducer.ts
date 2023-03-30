import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from '../API/APi'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import {StateProps , FetchStateProps, arrDishMenu  } from '../Interface/Interface'


export const arrDish: arrDishMenu = {
	arrState: [],
	isLoading:false
} 

export const GetDataMenu = createAsyncThunk(
	'fetch/menu',
	async () => {
		const responce = await Axios.get<AxiosRequestConfig, AxiosResponse<FetchStateProps>>('menu.json')
		const result: StateProps[] = Object.keys(responce.data).map((e) => {
			const oblState: StateProps = {
				title: responce.data[e].title,
				image: responce.data[e].image,
				price: responce.data[e].price,
				description: responce.data[e].description,
				id: e,
				showHandler:false
			}
			return oblState
		})
		return result

	}
)


const OrderSlice = createSlice({
	name: 'menu',
	initialState: arrDish,
	reducers: {
		showHandlerDescription: (state, action: PayloadAction<number>) => {
			const copyState: StateProps = state.arrState[action.payload]
			copyState.showHandler = !copyState.showHandler			
		}
		},
	extraReducers: (builder) =>{
		builder
			.addCase( GetDataMenu.pending,(state) => {
				return state = {...state , isLoading: false}
			})
			.addCase(GetDataMenu.fulfilled, (state, action) => {
				return state = {
					arrState: action.payload,
					isLoading: false
					
				}
			})
	}

})

export const { showHandlerDescription} = OrderSlice.actions


export default OrderSlice.reducer
