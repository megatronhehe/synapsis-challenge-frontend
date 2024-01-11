import BlogsList from "@/components/BlogsList";
import Pagination from "@/components/Pagination";
import BlogsListSkeleton from "@/components/skeletons/BlogsListSkeleton";
import { Suspense } from "react";

export default async function Home({
	searchParams,
}: {
	searchParams?: { page?: number };
}) {
	// kalo gada params set current page to 1 dalam bentuk number
	const currentPage = searchParams?.page ? +searchParams.page : 1;

	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4">
				<h1 className="text-xl text-center mb-4">All Blogs Page</h1>

				<Suspense key={currentPage} fallback={<BlogsListSkeleton />}>
					<BlogsList currentPage={currentPage} />
				</Suspense>

				<Pagination currentPage={currentPage} />
			</div>
		</main>
	);
}
