import { useContext, useEffect, useState } from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";
import { ProductCartContext } from "../App";

const Cart = () => {
	const { product } = useContext(ProductCartContext);
	const [isEmpty, setIsEmpty] = useState(false);
	// console.log("products", product);

	useEffect(() => {
		Object.keys(product).length === 0 ? setIsEmpty(true) : setIsEmpty(false);
	}, [product]);

	return (
		<div className="bg-white p-3 rounded-lg">
			{isEmpty ? (
				<>
					<h1>Your Cart(0)</h1>
					<img src={emptyCart} alt="empty illustration" />
				</>
			) : (
				<>
					{Object.values(product).map((item, index) => (
						<div key={index}>
							<section className="flex justify-between"></section>
						</div>
					))}
				</>
			)}
		</div>
	);
};

export default Cart;
