import React from "react";
import Typed from "react-typed";

const Hero = () => {
	return (
		<div className="text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center mt-4">
			<p className="text-[#00df9a] font-bold p-2">Lorem, ipsum dolor</p>
			<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
				Lorem, ipsum dolor.
			</h1>
			<div className="flex justify-center items-center py-4">
				<p className="md:text-5xl sm:text-4xl text-xl font-bold">
					Fast, flexible financing for
				</p>
				<Typed
					className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 text-[#00df9a]"
					strings={["BTB", "BTC", "SASS"]}
					typeSpeed={120}
					backSpeed={140}
					loop
				/>
			</div>

			<p className="md:text-2xl font-bold text-gray-500 mt-6 ">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
				dolorem impedit ea beatae magni laborum itaque, debitis officia eveniet
				esse, minus dolor aliquam nulla ex.
			</p>

			<button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
				Get Started
			</button>
		</div>
	);
};

export default Hero;
