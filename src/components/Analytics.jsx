import React from "react";
import laptop from "../assets/laptop.jpg";

const Analytics = () => {
	return (
		<div className="w-full bg-white py-16 px-4">
			<div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
				<img
					src={laptop}
					alt="laptop icon"
					className="w-[500px] mx-auto my-4"
				/>
				<div className="flex flex-col justify-center">
					<p className="text-[#00df9a] font-bold">Lorem ipsum dolor</p>
					<h1 className="md:text-4xl sm-text-3xl text-2xl font-bold py-2">
						Lorem ipsum dolor sit
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
						soluta autem quisquam impedit neque sint culpa nihil accusantium id
						corrupti! Ratione, quos? Unde, necessitatibus quo. Vero totam quos
						aliquam perferendis.
					</p>

					<button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6  py-3 bg-black md:mx-0 mx-auto">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Analytics;
