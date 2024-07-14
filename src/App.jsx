import { createContext, useState } from "react";
import Cart from "./components/Cart";
import Desserts from "./components/Desserts";

export const ProductCartContext = createContext();

function App() {
	const [product, setProduct] = useState({});
	return (
		<ProductCartContext.Provider value={{ product, setProduct }}>
			<div className="md:flex md:w-[90%] md:justify-center h-max md:space-x-4 px-7 md:py-10 md:ml-20">
				<div className="md:w-3/4">
					<h1 className="my-4 md:-mt-5 font-extrabold text-3xl">Desserts</h1>
					<Desserts />
				</div>
				<div className="md:w-1/4">
					<Cart />
				</div>
			</div>
		</ProductCartContext.Provider>
	);
}

export default App;
