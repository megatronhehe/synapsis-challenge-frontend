import { getBlogs } from "@/actions/blogs";
import { BlogType } from "@/types/BlogType";
import React from "react";
import BlogCard from "./BlogCard";

type PaginationProps = {
	currentPage: number;
};

export default async function BlogsList({ currentPage }: PaginationProps) {
	// sengaja delay to show skeleton when loading
	await new Promise((resolve) => setTimeout(resolve, 500));

	const blogs = await getBlogs(currentPage);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
			{blogs?.map((blog: BlogType) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	);
}
