"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useDebouncedCallback } from "use-debounce";

export default function SearchForm() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const handleSearch = useDebouncedCallback((searchInput) => {
		console.log(searchInput);

		const params = new URLSearchParams(searchParams);
		if (searchInput) {
			params.set("query", searchInput);
		} else {
			params.delete("query");
		}
		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return (
		<div className="border-b pb-2 flex items-center gap-2">
			<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
				<PiMagnifyingGlass />
			</div>
			<input
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("query")?.toString()}
				placeholder="search user's name here ..."
				className="text-sm px-3 py-1 outline-none"
			/>
		</div>
	);
}
