import { useContext, useEffect, useRef, useState } from "react";
import data from "../data.json";
import Button from "./Button";
import { ProductCartContext } from "../App";

const Desserts = () => {
	const views = ["mobile", "tablet", "desktop"];
	const [view, setView] = useState();
	const [selectedProducts, setSelectedProducts] = useState([]);
	const { setProduct, product } = useContext(ProductCartContext);

	console.log("Selected products:", selectedProducts);

	useEffect(() => {
		const viewport = window.innerWidth;
		if (viewport <= 425) setView(views[0]);
		else if (viewport > 425 && viewport < 768) setView(views[1]);
		else setView(views[2]);
	}, [view]);

	const handleSelect = (product) => {
		const selectedProductIndex = selectedProducts.findIndex(
			(p) => p.name === product.name
		); // find the index of the selected product

		if (selectedProductIndex !== -1) {
			const updatedSelectedProducts = [...selectedProducts]; // update selected products
			updatedSelectedProducts[selectedProductIndex].count++; // update count of selected products
			setSelectedProducts(updatedSelectedProducts);
		} else {
			setSelectedProducts([...selectedProducts, { ...product, count: 1 }]); // give selected products count of one
		}
	};

	useEffect(() => setProduct(selectedProducts));

	console.log("Cart:", product);

	return (
		<div className="md:grid md:grid-cols-3 md:gap-4">
			{data.map((product, index) => (
				<div key={index} className="relative">
					<img
						src={product.image[view]}
						className={`${
							selectedProducts.some((p) => p.name === product.name) &&
							"border-2 border-red-700"
						} rounded-lg`}
					/>
					<Button
						product={product}
						selectedProducts={selectedProducts}
						setSelectedProducts={setSelectedProducts}
						handleSelect={handleSelect}
					/>
					<div className="my-6 md:mt-8">
						<p className="text-gray-400 font-semibold">{product.category}</p>
						<p className="font-bold text-gray-700 text-lg">{product.name}</p>
						<p className="text-red-900 font-bold text-lg">${product.price}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Desserts;
