"use client";

import { useFormStatus } from "react-dom";
import { PiTrash, PiCircleNotch } from "react-icons/pi";

export default function DeleteButton() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className={`w-8 h-8 flex items-center justify-center bg-red-300 text-white rounded-lg duration-200 ${
				pending
					? "bg-gray-300 hover:bg-gray-400"
					: "bg-red-300 hover:bg-red-400 "
			}`}
		>
			{pending ? <PiCircleNotch className="animate-spin" /> : <PiTrash />}
		</button>
	);
}
