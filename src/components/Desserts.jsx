import { useEffect } from "react";
import data from "../data.json";
import { useState } from "react";
import Button from "./Button";

const Desserts = () => {
	const views = ["mobile", "tablet", "desktop"];
	const [view, setView] = useState();

	useEffect(() => {
		const viewport = window.innerWidth;
		if (viewport <= 425) setView(views[0]);
		else if (viewport > 425 && viewport < 768) setView(views[1]);
		else setView(views[2]);
	}, [view]);

	// console.log(views === Object.keys(data.forEach((x) => x.image)));
	data.forEach((x) => console.log(Object.keys(x.image) === view));

	return (
		<div className="md:grid md:grid-cols-3 md:gap-4">
			{data.map((product) => (
				<div key={product.name} className="relative">
					<img src={product.image.mobile} className="rounded-lg" />
					<Button product={product} />
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
