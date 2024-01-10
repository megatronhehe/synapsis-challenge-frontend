import UserItem from "./UserItem";

import { UserType } from "@/types/UserType";
import { getUsers } from "@/actions/users";

export default async function UserList({
	searchParams,
}: {
	searchParams?: {
		query?: string;
	};
}) {
	// sengaja delay to show skeleton when loading
	await new Promise((resolve) => setTimeout(resolve, 500));

	const users = await getUsers(searchParams?.query || "");

	return (
		<ul className="flex flex-col gap-2">
			{users?.map((user: UserType) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
}
