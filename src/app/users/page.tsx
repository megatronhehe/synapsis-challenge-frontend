import CreateUserForm from "@/components/CreateUserForm";
import SearchForm from "@/components/SearchForm";
import UserList from "@/components/UserList";

export default async function Users({
	searchParams,
}: {
	searchParams?: {
		query?: string;
		//   page?: string;
	};
}) {
	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-4">
				<h1 className="text-xl text-center ">Users Page</h1>

				<CreateUserForm />

				<SearchForm />

				<UserList searchParams={searchParams} />
			</div>
		</main>
	);
}
