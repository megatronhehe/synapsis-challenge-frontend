"use server";

export async function getBlogs() {
	try {
		const response = await fetch("https://gorest.co.in/public/v2/posts");

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
