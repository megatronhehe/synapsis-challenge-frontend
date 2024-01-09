import BlogCard from "@/components/BlogCard";
import { BlogType } from "@/types/BlogType";

async function getBlogs() {
	const response = await fetch("https://gorest.co.in/public/v2/posts");
	const data = await response.json();
	return data;
}

export default async function Home() {
	const blogs = await getBlogs();

	return (
		<main className="font-light flex justify-center text-gray-600">
			<div className="max-w-3xl w-full p-4">
				<h1 className="text-xl text-center mb-4">Blogs</h1>

				{/* display blogs */}
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
					{blogs?.map((blog: BlogType) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
			</div>
		</main>
	);
}
