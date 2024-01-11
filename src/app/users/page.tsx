import CreateUserForm from "@/components/CreateUserForm";
import Pagination from "@/components/Pagination";
import SearchForm from "@/components/SearchForm";
import UsersList from "@/components/UsersList";
import UsersListSkeleton from "@/components/skeletons/UsersListSkeleton";
import { Suspense } from "react";

export default async function Users({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		page?: number;
	};
}) {
	// kalo gada params set current page to 1 dalam bentuk number
	const currentPage = searchParams?.page ? +searchParams.page : 1;

	const suspenseKey = `${searchParams?.query}-${currentPage}`;

	return (
		<main className="font-light flex justify-center text-gray-600 min-h-screen">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-4">
				<h1 className="text-xl text-center ">Users Page</h1>

				<CreateUserForm />

				<SearchForm />

				<Suspense key={suspenseKey} fallback={<UsersListSkeleton />}>
					<UsersList searchParams={searchParams} currentPage={currentPage} />
				</Suspense>

				<Pagination currentPage={currentPage} />
			</div>
		</main>
	);
}
