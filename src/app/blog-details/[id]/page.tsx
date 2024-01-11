import { CommentType } from "@/types/CommentType";
import Link from "next/link";
import CommentItem from "@/components/CommentItem";
import { PiCaretLeft, PiUser } from "react-icons/pi";

// fetch comments based on post id
async function getComments(postId: number) {
	const response = await fetch(
		`https://gorest.co.in/public/v2/posts/${postId}/comments`
	);
	const data = await response.json();
	return data;
}

// fetch blog based on post id
async function getBlog(postId: number) {
	const response = await fetch(
		`https://gorest.co.in/public/v2/posts/${postId}`
	);
	const data = await response.json();
	return data;
}

export default async function blogDetails({
	params,
	searchParams,
}: {
	params: { id: number };
	searchParams: { user_id: number };
}) {
	// fetch data barengan
	const [comments, blog] = await Promise.all([
		getComments(params.id),
		getBlog(params.id),
	]);

	return (
		<main className="font-light flex justify-center text-gray-600 min-h-screen">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-8">
				<Link
					href="/"
					className="w-18 text-sm text-gray-400 hover:-ml-2 duration-200 hover:text-gray-600 flex items-center gap-2"
				>
					<PiCaretLeft /> Back
				</Link>

				<section className="flex items-center gap-4 ">
					<figure className="aspect-square w-12 text-3xl flex items-center justify-center rounded-full bg-gray-100">
						<PiUser />
					</figure>
					<p>user {searchParams.user_id} (author)</p>
				</section>

				<section className="flex border-b pb-8 flex-col gap-4">
					<h1 className="text-2xl font-semibold flex flex-col">{blog.title}</h1>
					<p>{blog.body}</p>
				</section>

				<section>
					<h2 className="text-center">Comments</h2>
					{comments.length > 0 ? (
						<ul className="flex flex-col gap-4 mt-4 text-sm">
							{comments?.map((comment: CommentType) => (
								<CommentItem key={comment.id} comment={comment} />
							))}
						</ul>
					) : (
						<div className="text-center mt-12 text-gray-400">
							No comments on this blog yet...
						</div>
					)}
				</section>
			</div>
		</main>
	);
}
