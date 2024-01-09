import { BlogType } from "@/types/BlogType";
import { PiArrowRight } from "react-icons/pi";
import Link from "next/link";

type BlogCardProps = {
	blog: BlogType;
};

export default function BlogCard({ blog }: BlogCardProps) {
	const { id, title, user_id } = blog;

	return (
		<Link
			href={`/blog-details/${id}?user_id=${user_id}`}
			className="border text-sm p-4 h-32 rounded-xl flex flex-col justify-between shadow-sm hover:rounded-none duration-200 hover:border-blue-400 group"
		>
			<h2 className="">{title}</h2>
			<div className="self-end text-xs group-hover:mr-0 mr-2 duration-200 flex items-center justify-center gap-1 group-hover:font-semibold">
				read more <PiArrowRight />
			</div>
		</Link>
	);
}
