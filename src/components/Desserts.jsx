import { useContext, useEffect, useRef, useState } from "react";
import data from "../data.json";
import Button from "./Button";
import { ProductCartContext } from "../App";

const Desserts = () => {
	const views = ["mobile", "tablet", "desktop"];
	const [view, setView] = useState();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const { product: productCart } = useContext(ProductCartContext);

	useEffect(() => {
		const viewport = window.innerWidth;
		if (viewport <= 425) setView(views[0]);
		else if (viewport > 425 && viewport < 768) setView(views[1]);
		else setView(views[2]);
	}, [view]);

	const handleSelect = (product) => {
		if (selectedProducts.some((p) => p.name === product.name)) {
			setSelectedProducts(
				selectedProducts.filter((p) => p.name !== product.name)
			);
		} else {
			setSelectedProducts([...selectedProducts, product]);
		}
	};

	const x = Object.values(productCart);

	return (
		<div className="md:grid md:grid-cols-3 md:gap-4">
			{data.map((product, index) => (
				<div key={index} className="relative">
					<img
						src={product.image[view]}
						className={`${
							selectedProducts.some((p) => p.name === product.name) &&
							"border-2 border-rose-600"
						} rounded-lg`}
					/>
					<Button product={product} handleSelect={handleSelect} index={index} />
					<div className="my-6 md:mt-8">
						<p className="text-gray-400 font-semibold">{product.category}</p>
						<p className="font-bold text-gray-700 text-lg">{product.name}</p>
						<p className="text-rose-900 font-bold text-lg">${product.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Desserts;
