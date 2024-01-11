import { updateUser } from "@/actions/users";
import { UserType } from "@/types/UserType";
import { Dispatch, SetStateAction } from "react";
import { PiX } from "react-icons/pi";
import ConfirmEditUserButton from "./buttons/ConfirmEditUserButton";

type EditFormModalProps = {
	setToggleModal: Dispatch<SetStateAction<boolean>>;
	user: UserType;
};

export default function EditFormModal({
	setToggleModal,
	user,
}: EditFormModalProps) {
	const { id, name, email, gender, status } = user;

	async function submit(formData: FormData, userId: number) {
		try {
			await updateUser(formData, id);
			setToggleModal(false);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div
			onClick={() => setToggleModal(false)}
			className="fixed top-0 left-0 w-full items-center h-screen justify-center z-10 bg-black bg-opacity-30 p-4 backdrop-blur-sm flex flex-col"
		>
			<button className="w-12 h-12 rounded-full flex items-center justify-center text-white bg-red-300 mb-4 text-xl hover:bg-red-400 duration-200 ">
				<PiX />
			</button>
			<div className="max-w-xl w-full p-6 bg-white rounded-2xl text-sm">
				<h1 className="text-center border-b pb-4 mb-4 text-xl">Edit Profile</h1>
				<form
					action={(formData) => submit(formData, id)}
					onClick={(e) => e.stopPropagation()}
					className="flex flex-col gap-4"
				>
					<div>
						<label htmlFor="name">Name</label>
						<input
							id="name"
							type="text"
							name="name"
							defaultValue={name}
							autoComplete="on"
							className="px-3 py-2 outline-none w-full border rounded-xl mt-2"
						/>
					</div>

					<div>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							defaultValue={email}
							autoComplete="on"
							className="px-3 py-2 outline-none w-full border rounded-xl mt-2"
						/>
					</div>

					<div className="flex gap-4 sm:flex-row flex-col">
						<div className="sm:w-1/2">
							<label htmlFor="gender">Gender</label>
							<select
								id="gender"
								name="gender"
								defaultValue={gender}
								className="px-3 py-2 outline-none w-full border rounded-xl mt-2"
								autoComplete="off"
							>
								<option value={gender}>{gender}</option>
								<option value={gender === "male" ? "female" : "male"}>
									{gender === "male" ? "female" : "male"}
								</option>
							</select>
						</div>
						<div className="sm:w-1/2">
							<label htmlFor="status">Status</label>
							<select
								id="status"
								name="status"
								defaultValue={status}
								className="px-3 py-2 outline-none w-full border rounded-xl mt-2"
								autoComplete="off"
							>
								<option value={status}>{status}</option>
								<option value={status === "active" ? "inactive" : "active"}>
									{status === "active" ? "inactive" : "active"}
								</option>
							</select>
						</div>
					</div>
					<ConfirmEditUserButton />
				</form>
			</div>
		</div>
	);
}
