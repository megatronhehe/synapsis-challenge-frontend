"use server";

import { revalidatePath } from "next/cache";

// pake tokenku aja, mau ganti silakan
const token =
	"93403ef75511fa7689d5dc3fc06012bf80cb97debeae9aac03209def5065533b";

// CREATE USER
export async function createUser(formData: FormData) {
	try {
		await fetch("https://gorest.co.in/public/v2/users", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		// reveal changes on users list
		revalidatePath("/users");
	} catch (error) {
		console.log(error);
	}
}

// FETHCCH USER
export async function getUsers() {
	try {
		const response = await fetch(`https://gorest.co.in/public/v2/users`, {
			cache: "no-store",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
}

// UPDATE USER
export async function updateUser(formData: FormData, userId: number) {
	try {
		await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		});

		// reveal changes on users list
		revalidatePath("/users");
	} catch (error) {
		console.log(error);
	}
}

// DELETE USER
export async function deleteUser(userId: number) {
	try {
		await fetch(`https://gorest.co.in/public/v2/users/${userId}`, {
			cache: "no-store",
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		// reveal changes on users list
		revalidatePath("/users");
	} catch (error) {
		console.log(error);
	}
}
