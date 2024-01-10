import CreateUserForm from "@/components/CreateUserForm";
import UserList from "@/components/UserList";

import { PiMagnifyingGlass } from "react-icons/pi";

export default async function users() {
	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-4">
				<h1 className="text-xl text-center ">Users Page</h1>

				<CreateUserForm />

				<div className="border-b pb-2 flex items-center gap-2">
					<PiMagnifyingGlass />
					<h2 className="text-sm">search user</h2>
				</div>

				<UserList />
			</div>
		</main>
	);
}
