import { createContext, useState } from "react";
import Cart from "./components/Cart";
import Desserts from "./components/Desserts";

export const ProductCartContext = createContext();

function App() {
	const [product, setProduct] = useState({});
	return (
		<ProductCartContext.Provider value={{ product, setProduct }}>
			<div className="md:flex md:w-[90%] md:justify-center h-max md:space-x-6 px-7 md:py-10 md:ml-20">
				<div className="md:w-2/3">
					<h1 className="my-4 md:-mt-3 md:mb-7 font-extrabold text-3xl">
						Desserts
					</h1>
					<Desserts />
				</div>
				<div className="md:w-1/3">
					<Cart />
				</div>
			</div>
		</ProductCartContext.Provider>
	);
}

export default App;
