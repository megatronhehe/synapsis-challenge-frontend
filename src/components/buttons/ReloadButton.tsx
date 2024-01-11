"use client";

import { useRouter } from "next/navigation";

export default function ReloadButton() {
	const { refresh } = useRouter();

	return (
		<button
			onClick={refresh}
			className="text-sm px-4 py-2 bg-blue-300 border border-blue-300 hover:bg-white hover:text-blue-300 duration-200 hover:rounded-none text-white rounded-xl"
		>
			Reload
		</button>
	);
}
