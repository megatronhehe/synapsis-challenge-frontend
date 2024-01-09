import { UserType } from "@/types/UserType";
import { PiTrash, PiNotePencil } from "react-icons/pi";

type UserItemProps = {
	user: UserType;
};

export default function UserItem({ user }: UserItemProps) {
	const firstLetter = user.name[0].toUpperCase();

	return (
		<li
			key={user.id}
			className="p-2 border rounded-xl flex items-top justify-between hover:border-gray-400 duration-200"
		>
			<div className="flex gap-4">
				<figure className="relative aspect-square w-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
					{firstLetter}
					<div
						className={`absolute top-0 right-0 w-3 h-3 rounded-full ${
							user.status === "active" ? "bg-green-300" : "bg-gray-300"
						}`}
					></div>
				</figure>
				<div>
					<p className="font-normal">{user.name}</p>
					<p className="text-xs text-gray-400">{user.email}</p>
					<p className="text-xs">{user.gender}</p>
				</div>
			</div>
			<div className="flex self-start text-xl gap-2">
				<button className="w-8 h-8 flex items-center justify-center bg-blue-300 text-white rounded-lg hover:bg-blue-400 duration-200">
					<PiNotePencil />
				</button>
				<button className="w-8 h-8 flex items-center justify-center bg-red-300 text-white rounded-lg hover:bg-red-400 duration-200">
					<PiTrash />
				</button>
			</div>
		</li>
	);
}
