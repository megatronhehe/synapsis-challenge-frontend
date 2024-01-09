import { CommentType } from "@/types/CommentType";
import Link from "next/link";

async function getComments(postId: number) {
	const response = await fetch(
		`https://gorest.co.in/public/v2/posts/${postId}/comments`
	);
	const data = await response.json();
	return data;
}

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
	const comments = await getComments(params.id);
	const blog = await getBlog(params.id);

	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4 flex flex-col gap-4">
				<Link href="/">back</Link>

				<section className="flex flex-col gap-4">
					<h1 className="text-2xl text-center flex flex-col">
						{blog.title}
						<span className="text-lg">
							{" "}
							written by - user {searchParams.user_id}
						</span>
					</h1>
					<p>{blog.body}</p>
				</section>

				<section>
					<h2>Comments</h2>
					<ul className="flex flex-col gap-4 mt-4">
						{comments?.map((comment: CommentType) => (
							<li key={comment.id}>
								{comment.name} - {comment.body}
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
