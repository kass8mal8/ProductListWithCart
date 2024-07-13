/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import cart from "../assets/images/icon-add-to-cart.svg";
import addToCart from "../assets/images/icon-increment-quantity.svg";
import decrementCart from "../assets/images/icon-decrement-quantity.svg";
import { ProductCartContext } from "../App";

const Button = ({ product }) => {
	const [isSelected, setIsSelected] = useState(false);
	const { setProduct, product: myproduct } = useContext(ProductCartContext);
	console.log(Object.keys(myproduct));

	const handleClick = (e) => {
		e.preventDefault();
		const updatedProducts = { ...myproduct, [product.name]: product };
		console.log("Updated", updatedProducts);
		setProduct(updatedProducts);
	};

	if (myproduct) {
		myproduct.forEach((product) => console.log(product));
	}

	return (
		<div
			className={`${
				isSelected ? "bg-rose-900 " : "bg-white"
			}  border w-1/2 md:w-3/5 shadow-md border-gray-300 rounded-3xl absolute -mt-5 ml-20 md:ml-12`}
		>
			<button
				className="flex w-full items-center text-center space-x-2 py-2 px-5 font-semibold"
				onClick={handleClick}
			>
				{isSelected ? (
					<>
						<img src={decrementCart} alt="minus" />
						<p>40</p>
						<img src={addToCart} alt="plus" />
					</>
				) : (
					<>
						<img src={cart} alt="cart" />
						<p className="text-sm">Add to Cart</p>
					</>
				)}
			</button>
		</div>
	);
};

export default Button;
