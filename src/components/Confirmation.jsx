/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import orderConfirmed from "../assets/images/icon-order-confirmed.svg";

const Confirmation = ({
	handleClear,
	isOpen,
	setIsOpen,
	products,
	totalArr,
}) => {
	const modalRef = useRef();
	isOpen && modalRef.current.showModal();

	useEffect(() => {
		isOpen && modalRef.current.showModal();
	}, [isOpen]);

	const handleClose = (e) => {
		const dimensions = modalRef.current.getBoundingClientRect();
		if (
			e.clientX < dimensions.left ||
			e.clientX > dimensions.right ||
			e.clientY < dimensions.top ||
			e.clientY > dimensions.bottom
		) {
			setIsOpen(false);
			modalRef.current.close();
		}
	};

	return (
		<dialog
			ref={modalRef}
			className="p-0 -mb-4 md:mb-auto py-5 px-6 w-full md:w-1/3 rounded-2xl max-w-[50ch] backdrop:opacity-50 backdrop:bg-black"
			onClick={handleClose}
		>
			<img src={orderConfirmed} alt="orderIconConfurmed" className="my-3" />
			<h1 className="font-extrabold text-3xl">Order Confirmed</h1>
			<p className="font-semibold opacity-40 text-gray-700 mb-7">
				We hope yo enjoy your food!
			</p>

			<aside className="bg-rose-50 py-3 px-4 rounded-lg divide-y">
				{products?.map((product, index) => (
					<ul
						key={product.name}
						className="flex items-center justify-between py-4"
					>
						<li>
							<div className="flex space-x-3">
								<img
									src={product.image.thumbnail}
									alt={product.name}
									className="rounded-md w-14 h-14"
								/>
								<section>
									<p>{product.name}</p>
									<aside className="flex space-x-3">
										<p className="font-semibold text-red-900">
											{product.count}x
										</p>
										<p className=" opacity-30 font-bold">${product.price}</p>
									</aside>
								</section>
							</div>
						</li>

						<li className="font-extrabold text-lg text-black opacity-60">
							${totalArr[index]}
						</li>
					</ul>
				))}
				<aside className="flex justify-between pt-5 mb-2 items-center">
					<p className="opacity-50 font-semibold">Order Total</p>
					<p className="font-extrabold text-3xl">
						${totalArr.length && totalArr.reduce((a, b) => a + b)}
					</p>
				</aside>
			</aside>

			<button
				className="bg-red-700 text-white capitalize w-full p-3 rounded-3xl my-3 mt-5"
				onClick={handleClear}
			>
				Start new order
			</button>
		</dialog>
	);
};

export default Confirmation;
