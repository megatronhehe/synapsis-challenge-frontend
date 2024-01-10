import UserItem from "./UserItem";

import { UserType } from "@/types/UserType";
import { getUsers } from "@/actions/users";

export default async function UserList() {
	const users = await getUsers();

	return (
		<ul className="flex flex-col gap-2">
			{users.map((user: UserType) => (
				<UserItem key={user.id} user={user} />
			))}
		</ul>
	);
}
