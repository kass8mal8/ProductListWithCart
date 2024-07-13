import { useContext } from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";

const Cart = () => {
	return (
		<div className="bg-white p-3 rounded-lg">
			<h1>Your Cart(0)</h1>
			<img src={emptyCart} alt="empty illustration" />
		</div>
	);
};

export default Cart;
