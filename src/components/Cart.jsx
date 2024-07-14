import { useContext, useEffect, useState } from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";
import { ProductCartContext } from "../App";
import removeIcon from "../assets/images/icon-remove-item.svg";

const Cart = () => {
	const { product } = useContext(ProductCartContext);
	const [products, setProducts] = useState(Object.values(product));
	const [isEmpty, setIsEmpty] = useState(false);
	// console.log("products", product);

	useEffect(() => {
		Object.keys(product).length === 0 ? setIsEmpty(true) : setIsEmpty(false);
	}, [product]);

	const handleFilter = (id) => {
		setProducts(products.filter((product) => product.name !== id));
	};

	console.log(products);

	return (
		<div className="bg-white p-5 rounded-lg">
			{isEmpty ? (
				<>
					<h1 className="text-red-700 font-extrabold text-3xl mb-5">
						Your Cart(0)
					</h1>

					<img src={emptyCart} alt="empty illustration" />
				</>
			) : (
				<>
					<h1 className="text-red-700 font-extrabold text-3xl mb-5">
						Your Cart ({products?.length})
					</h1>
					<div className="divide-y my-2">
						{products?.map((item, index) => (
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
												${`${item.count * item.price}`}
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
				</>
			)}
		</div>
	);
};

export default Cart;
