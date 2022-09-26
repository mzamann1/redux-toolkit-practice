export interface ICartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export interface ICartInitialState {
  cartItems: ICartItem[];
  amount: number;
  total: number;
  isLoading: boolean;
}
