"use server";

export async function getBlogs(currentPage: number) {
	try {
		const response = await fetch(
			`https://gorest.co.in/public/v2/posts?page=${currentPage}`
		);

		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
