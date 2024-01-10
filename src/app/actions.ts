"use server";

import { revalidatePath } from "next/cache";

export async function createUser(formData: FormData) {
	await fetch("https://gorest.co.in/public/v2/users", {
		// not in env on purpose
		method: "POST",
		headers: {
			Authorization: `Bearer 93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b`,
		},
		body: formData,
	});
	revalidatePath("/users");
}
