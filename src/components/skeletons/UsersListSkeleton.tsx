import React from "react";

export default function UsersListSkeleton() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const ItemSkeleton = array.map((item) => (
		<li
			key={item}
			className="p-2 border rounded-xl sm:flex-row flex-col flex items-top justify-between bg-gray-100 animate-pulse"
		>
			<div className="flex gap-4 text-gray-200">
				<div className=" aspect-square w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-2xl"></div>
				<div>
					<div className="font-normal rounded-xl  bg-gray-200 w-20">a</div>
					<div className="text-xs rounded-xl  bg-gray-200 w-24">a</div>
					<div className="text-xs rounded-xl w-16  bg-gray-200">a</div>
				</div>
			</div>

			<div className="flex sm:self-start self-end text-xl gap-2">
				<div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-white rounded-lg "></div>
				<div className="w-8 h-8 flex items-center justify-center bg-gray-200 text-white rounded-lg "></div>
			</div>
		</li>
	));

	return <ul className="flex flex-col gap-2">{ItemSkeleton}</ul>;
}
