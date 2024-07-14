/* eslint-disable react/prop-types */
import cart from "../assets/images/icon-add-to-cart.svg";
import addToCart from "../assets/images/icon-increment-quantity.svg";
import decrementCart from "../assets/images/icon-decrement-quantity.svg";

const Button = ({
	product,
	handleSelect,
	selectedProducts,
	setSelectedProducts,
}) => {
	const selected = selectedProducts.some((p) => p.name === product.name);

	const index = selectedProducts.findIndex((p) => p.name === product.name);
	const handleCount = (method) => {
		const updatedSelectedProducts = [...selectedProducts];

		if (method === "add") {
			updatedSelectedProducts[index].count++;
		} else {
			if (updatedSelectedProducts[index].count === 1) {
				setSelectedProducts(
					selectedProducts.filter((p) => p.name !== product.name)
				);
				return;
			} else {
				updatedSelectedProducts[index].count--;
			}
		}
		setSelectedProducts(updatedSelectedProducts);
	};

	return (
		<div
			className={`${
				selected ? "bg-red-700 " : "bg-white"
			}  border w-1/2 md:w-3/5 shadow-md border-gray-300 rounded-3xl absolute -mt-5 ml-20 md:ml-12`}
		>
			{selected ? (
				<div className="flex w-full items-center text-center justify-between space-x-2 py-2 px-2 font-semibold">
					<aside
						className="border border-white rounded-full px-1 py-2"
						onClick={() => handleCount("minus")}
					>
						<img src={decrementCart} alt="minus" />
					</aside>
					<p className="text-white">
						{index !== -1 && selectedProducts[index].count}
					</p>
					<aside
						className="border border-white rounded-full p-1"
						onClick={() => handleCount("add")}
					>
						<img src={addToCart} alt="plus" />
					</aside>
				</div>
			) : (
				<button
					className="flex w-full px-4 space-x-2 justify-between py-2 font-semibold"
					onClick={() => handleSelect(product)}
				>
					<img src={cart} alt="cart" />
					<p className="text-sm">Add to Cart</p>
				</button>
			)}
		</div>
	);
};

export default Button;
