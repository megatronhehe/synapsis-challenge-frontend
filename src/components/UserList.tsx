import { revalidatePath } from "next/cache";
import UserItem from "./UserItem";

import { UserType } from "@/types/UserType";

// FETHCCH USER
async function getUsers() {
	const response = await fetch(`https://gorest.co.in/public/v2/users`, {
		cache: "no-store",
		// not in env on purpose
		headers: {
			Authorization: `Bearer 93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b`,
		},
	});

	const data = await response.json();
	return data;
}

// DELETE USER
async function deleteUser(userId: number) {
	"use server";
	await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
		// not in env on purpose
		cache: "no-store",
		method: "DELETE",
		headers: {
			Authorization: `Bearer 93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b`,
		},
	});

	revalidatePath("/users");
}

export default async function UserList() {
	const users = await getUsers();

	return (
		<ul className="flex flex-col gap-2">
			{users.map((user: UserType) => (
				<UserItem key={user.id} user={user} deleteUser={deleteUser} />
			))}
		</ul>
	);
}
