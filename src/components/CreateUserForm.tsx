"use client";

import { createUser } from "@/actions/users";
import { useRef } from "react";

export default function CreateUserForm() {
	// async function createUser(formData: FormData) {
	// 	"use server";

	// 	await fetch("https://gorest.co.in/public/v2/users", {
	// 		// not in env on purpose
	// 		method: "POST",
	// 		headers: {
	// 			Authorization: `Bearer 93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b`,
	// 		},
	// 		body: formData,
	// 	});

	// 	revalidatePath("/users");
	// }
	const ref = useRef<HTMLFormElement>(null);

	async function submit(formData: FormData) {
		// create user
		await createUser(formData);

		// clear form
		ref.current?.reset();
	}

	return (
		<div className="flex justify-center">
			<form
				ref={ref}
				action={async (formData) => submit(formData)}
				className="border p-4 max-w-xl w-full flex flex-col gap-4 rounded-2xl text-sm"
			>
				<h1 className="text-center text-base">Create New User</h1>
				<div className="w-full flex sm:flex-row flex-col gap-4 ">
					<input
						type="text"
						name="name"
						placeholder="input name here..."
						required
						className="border px-3 py-2 outline-none rounded-xl sm:w-1/2 focus:border-blue-400 hover:border-gray-500 duration-200"
					/>
					<input
						type="email"
						name="email"
						placeholder="input email here..."
						required
						className="border px-3 py-2 outline-none rounded-xl sm:w-1/2 focus:border-blue-400 hover:border-gray-500 duration-200"
					/>
				</div>
				<div className="w-full flex gap-4 ">
					<select
						name="gender"
						required
						className="outline-none px-3 py-2 border w-1/2 rounded-xl hover:border-gray-500 duration-200"
					>
						<option>-- select gender --</option>
						<option value="male">male</option>
						<option value="female">female</option>
					</select>
					<select
						name="status"
						required
						className="outline-none px-3 py-2 border w-1/2 rounded-xl hover:border-gray-500 duration-200"
					>
						<option>-- select status --</option>
						<option value="active">active</option>
						<option value="inactive">inactive</option>
					</select>
				</div>
				<button className="py-2 bg-green-300 text-white rounded-xl">
					create user
				</button>
			</form>
		</div>
	);
}
