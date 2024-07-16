import { useContext, useEffect, useState } from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";
import { ProductCartContext } from "../App";
import removeIcon from "../assets/images/icon-remove-item.svg";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import Confirmation from "./Confirmation";

const Cart = () => {
	const { product, setProduct } = useContext(ProductCartContext);
	const [cartProducts, setCartProducts] = useState([]);

	useEffect(() => {
		setCartProducts(Object.values(product));
	}, [product]);

	useEffect(() => {
		const updatedProductObject = {};
		cartProducts.forEach((product) => {
			updatedProductObject[product.name] = product;
		});

		setProduct(updatedProductObject);
	}, [setProduct]);

	const handleFilter = (id) => {
		const updatedProducts = cartProducts.filter(
			(product) => product.name !== id
		);

		setCartProducts(updatedProducts);
	};

	const totalArr = [];
	const cartCount = [];

	cartProducts.forEach((product) => {
		cartCount.push(product.count);
		totalArr.push(product.count * product.price);
	});

	const [isOpen, setIsOpen] = useState(false);
	console.log("Prods now:", cartProducts);

	return (
		<div className="bg-white p-5 rounded-lg md:sticky md:z-30 md:top-0">
			<Confirmation
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				products={cartProducts}
				totalArr={totalArr}
			/>
			{cartProducts.length === 0 ? (
				<div>
					<h1 className="text-red-700 font-extrabold text-3xl mb-5">
						Your Cart(0)
					</h1>

					<img src={emptyCart} alt="empty illustration" className="mx-auto" />
					<p className="text-rose-900 text-center mb-4">
						Your added items will appear here
					</p>
				</div>
			) : (
				<>
					<h1 className="text-red-700 font-extrabold text-3xl mb-5">
						Your Cart ({cartCount.reduce((a, b) => a + b)})
					</h1>
					<div className="divide-y my-2">
						{cartProducts.map((item, index) => (
							<div key={index} className="mb-4">
								<section className="flex justify-between my-2">
									<aside>
										<p className="font-semibold">{item.name}</p>
										<ul className="flex space-x-3 font-semibold">
											<li className="font-semibold text-red-900">
												{item.count}x
											</li>
											<li className="text-red-900 opacity-30">
												@ ${item.price}
											</li>
											<li className="opacity-40 font-bold">
												${totalArr[index]}
											</li>
										</ul>
									</aside>
									<img
										src={removeIcon}
										alt="close"
										className="border-2 cursor-pointer rounded-full w-6 h-6 p-1"
										onClick={() => handleFilter(item.name)}
									/>
								</section>
							</div>
						))}
					</div>
					<ul className="flex justify-between items-center border-t py-4">
						<li className="opacity-30 font-semibold">Order Total</li>
						<li className="text-2xl font-extrabold">
							${totalArr.reduce((a, b) => a + b)}
						</li>
					</ul>
					<div className="my-3">
						<section className="md:p-3 py-3 bg-rose-50 flex items-center rounded-md ">
							<img
								src={carbonNeutral}
								alt="carbon-neutral"
								className="ml-4 mr-2"
							/>
							<p className="opacity-50 md:text-center">
								This is a{" "}
								<span className=" text-black font-bold">carbon-neutral</span>{" "}
								delivery
							</p>
						</section>
						<button
							className="bg-red-600 text-white text-center w-full rounded-3xl py-3 mt-5"
							onClick={() => setIsOpen(true)}
						>
							Confirm Order
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
