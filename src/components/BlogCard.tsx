import { BlogType } from "@/types/BlogType";

import Link from "next/link";

type BlogCardProps = {
	blog: BlogType;
};

export default function BlogCard({ blog }: BlogCardProps) {
	const { id, title, user_id } = blog;

	return (
		<Link
			href={`/blogDetails/${id}?user_id=${user_id}`}
			className="border text-sm p-4 h-32 rounded-xl flex flex-col justify-between"
		>
			<h2 className="">{title}</h2>
			<div className="self-end text-xs">read more</div>
		</Link>
	);
}
