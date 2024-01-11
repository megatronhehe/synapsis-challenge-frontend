"use server";

// FETCH ALL BLOGS
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

// FETCH COMMETNS
export async function getComments(postId: number) {
	try {
		const response = await fetch(
			`https://gorest.co.in/public/v2/posts/${postId}/comments`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}

// FETCH BLOG DETAILS?
export async function getBlog(postId: number) {
	try {
		const response = await fetch(
			`https://gorest.co.in/public/v2/posts/${postId}`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
