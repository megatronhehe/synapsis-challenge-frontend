import UserItem from "./UserItem";

import { UserType } from "@/types/UserType";
import { getUsers } from "@/actions/users";
import ReloadButton from "./buttons/ReloadButton";

type UsersListProps = {
	searchParams?: { query?: string };
	currentPage?: number;
};

export default async function UsersList({
	searchParams,
	currentPage,
}: UsersListProps) {
	// sengaja delay to show skeleton when loading
	await new Promise((resolve) => setTimeout(resolve, 500));

	const users = await getUsers(searchParams?.query || "", currentPage || 1);

	// error
	if (!users) {
		return (
			<div className="my-40 flex items-center flex-col gap-4 justify-center">
				<h1>Something went wrong...</h1>
				<ReloadButton />
			</div>
		);
	}

	// if no users found
	if (users.length < 1) {
		return (
			<div className="text-center my-24 text-gray-400">
				No user with the name {"'"}
				{searchParams?.query}
				{"'"} was found...
			</div>
		);
	}

	return (
		<ul className="flex flex-col gap-2 -mb-4">
			{users?.map((user: UserType) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
}
