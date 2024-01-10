import React from "react";

export default function BlogsListSkeleton() {
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const CardSkeleton = array.map((item) => (
		<div
			key={item}
			className="border text-sm p-4 h-32 rounded-xl flex flex-col justify-between shadow-sm hover:rounded-none bg-gray-100 animate-pulse duration-200 hover:border-blue-400 group"
		></div>
	));

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">{CardSkeleton}</div>
	);
}
