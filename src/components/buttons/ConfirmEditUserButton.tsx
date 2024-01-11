"use client";

import { useFormStatus } from "react-dom";
import { PiCircleNotch } from "react-icons/pi";

export default function ConfirmEditUserButton() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending}
			className="py-2 bg-green-300 text-white rounded-xl disabled:bg-gray-300 flex items-center justify-center gap-2"
		>
			{pending && <PiCircleNotch className="animate-spin" />} edit
			{pending && "ing"} user {pending && "..."}
		</button>
	);
}
