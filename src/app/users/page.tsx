import CreateUserForm from "@/components/CreateUserForm";
import SearchForm from "@/components/SearchForm";
import UsersList from "@/components/UsersList";
import UsersListSkeleton from "@/components/skeletons/UsersListSkeleton";
import { Suspense } from "react";

export default async function Users({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-4">
				<h1 className="text-xl text-center ">Users Page</h1>

				<CreateUserForm />

				<SearchForm />

				<Suspense fallback={<UsersListSkeleton />}>
					<UsersList searchParams={searchParams} />
				</Suspense>
			</div>
		</main>
	);
}
