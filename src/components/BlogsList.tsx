import { getBlogs } from "@/actions/blogs";
import { BlogType } from "@/types/BlogType";
import React from "react";
import BlogCard from "./BlogCard";
import ReloadButton from "./buttons/ReloadButton";

type PaginationProps = {
	currentPage: number;
};

export default async function BlogsList({ currentPage }: PaginationProps) {
	// sengaja delay to show skeleton when loading
	await new Promise((resolve) => setTimeout(resolve, 500));

	const blogs = await getBlogs(currentPage);

	// error
	if (!blogs) {
		return (
			<div className="my-40 flex items-center flex-col gap-4 justify-center">
				<h1>Something went wrong...</h1>
				<ReloadButton />
			</div>
		);
	}

	// aman
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
			{blogs?.map((blog: BlogType) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
}
