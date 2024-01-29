"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

type PaginationProps = {
	currentPage: number;
};

export default function Pagination({ currentPage }: PaginationProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	useEffect(() => {
		const params = new URLSearchParams(searchParams);
		params.set("page", `${1}`);
		replace(`${pathname}?${params.toString()}`);
	}, []);

	// next page function
	function nextPage() {
		const params = new URLSearchParams(searchParams);

		const pagePlus1 = currentPage + 1;

		params.set("page", `${pagePlus1}`);

		replace(`${pathname}?${params.toString()}`);
	}

	// prev page function
	function prevPage() {
		const params = new URLSearchParams(searchParams);

		const pageSub1 = currentPage - 1;

		if (currentPage === 2) {
			params.delete("page");
			replace(`${pathname}`);
		} else {
			params.set("page", `${pageSub1}`);
			replace(`${pathname}?${params.toString()}`);
		}
	}

	return (
		<nav className="mt-4 gap-6 flex justify-center text-sm">
			<button
				onClick={prevPage}
				disabled={currentPage === 1}
				className="flex gap-1 items-center w-14 pl-2 hover:pr-2 hover:pl-0 duration-200 hover:font-medium disabled:text-gray-300"
			>
				<PiCaretLeft /> prev
			</button>

			<div className="font-semibold">{currentPage}</div>

			<button
				onClick={nextPage}
				className="flex gap-1 items-center w-14 pr-2 hover:pl-2 hover:pr-0 duration-200 hover:font-medium"
			>
				next <PiCaretRight />
			</button>
		</nav>
	);
}
