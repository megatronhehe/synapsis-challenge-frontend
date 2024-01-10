import BlogsList from "@/components/BlogsList";
import BlogsListSkeleton from "@/components/skeletons/BlogsListSkeleton";
import { Suspense } from "react";

export default async function Home() {
	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4">
				<h1 className="text-xl text-center mb-4">All Blogs Page</h1>

				<Suspense fallback={<BlogsListSkeleton />}>
					<BlogsList />
				</Suspense>
			</div>
		</main>
	);
}
