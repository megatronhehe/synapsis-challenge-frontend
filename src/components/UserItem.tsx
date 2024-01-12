"use client";

import { UserType } from "@/types/UserType";
import { PiTrash, PiNotePencil } from "react-icons/pi";
import { deleteUser } from "@/actions/users";
import { useState } from "react";
import EditFormModal from "./EditFormModal";
import DeleteButton from "./buttons/DeleteButton";

type UserItemProps = {
	user: UserType;
};

export default function UserItem({ user }: UserItemProps) {
	const [toggleModal, setToggleModal] = useState(false);

	const firstLetter = user.name[0].toUpperCase();

	return (
		<>
			<li
				key={user.id}
				className="p-2 border rounded-xl sm:flex-row flex-col flex items-top justify-between hover:border-gray-400 duration-200"
			>
				{/* user info here */}
				<div className="flex gap-4">
					<figure className="relative aspect-square w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
						{firstLetter}
						<div
							className={`absolute top-0.5 right-0.5 w-3 h-3 rounded-full ${
								user.status === "active" ? "bg-green-300" : "bg-gray-200"
							}`}
						></div>
					</figure>
					<div>
						<p className="font-normal">{user.name}</p>
						<p className="text-xs text-gray-400">{user.email}</p>
						<p className="text-xs">{user.gender}</p>
					</div>
				</div>

				{/* action button */}
				<div className="flex sm:self-start self-end text-xl gap-2">
					<button
						onClick={() => setToggleModal(true)}
						className="w-8 h-8 flex items-center justify-center bg-blue-300 text-white rounded-lg hover:bg-blue-400 duration-200"
					>
						<PiNotePencil />
					</button>
					<form action={() => deleteUser(user.id)}>
						<DeleteButton />
					</form>
				</div>
			</li>

			{toggleModal && (
				<EditFormModal setToggleModal={setToggleModal} user={user} />
			)}
		</>
	);
}
