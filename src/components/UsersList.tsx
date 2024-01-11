import UserItem from "./UserItem";

import { UserType } from "@/types/UserType";
import { getUsers } from "@/actions/users";

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

	return (
		<ul className="flex flex-col gap-2 -mb-4">
			{users?.map((user: UserType) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
}
