export interface StateProps {
	title: string;
	image: string;
	price: number;
	description: string;
	id: string;
	showHandler: boolean
	
}
export interface FetchStateProps{
	[key :string] : StateProps
}
export interface DishOrder {
	dish: Order[];
	totalPrice: number;
	disabledHandler: boolean
	showFormForOrder: boolean
}
export interface Order{
	title: string;
	price: number
	amount: number;
}
export interface  ChangeValueProps {
	name: string;
	value:string | number
	
}
export interface arrDishMenu {
	arrState: StateProps[]
	isLoading:boolean
}
export interface FormProps {
	name: string;
	adress: string;
	disabled: boolean
	
}
export interface MainState {
	menu: StateProps[]
	order: DishOrder;
	form :FormProps
}
