import React from "react";

export default function BlogsListSkeleton() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const CardSkeleton = array.map((item) => (
		<div
			key={item}
			className="border text-sm p-4 h-32 rounded-xl flex flex-col justify-between shadow-sm text-gray-200 bg-gray-100 animate-pulse "
		>
			<div className="flex flex-col gap-1">
				<div className="w-full bg-gray-200 rounded-lg ">a</div>
				<div className="w-1/3 text-gray-200 bg-gray-200 rounded-lg">a</div>
			</div>
			<div className="self-end text-xs w-1/3 flex items-center justify-center gap-1 bg-gray-200 rounded-xl">
				a
			</div>
		</div>
	));

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">{CardSkeleton}</div>
	);
}
