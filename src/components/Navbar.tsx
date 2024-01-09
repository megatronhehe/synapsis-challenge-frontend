import Link from "next/link";

export default function Navbar() {
	return (
		<header className="font-light text-gray-600 border-b">
			<nav className="flex justify-center">
				<ul className="max-w-3xl w-full p-4 flex justify-between items-center text-sm">
					<li>
						<Link href="/" className="text-xl ">
							Synapsis.Blog
						</Link>
					</li>
					<div className="flex gap-6">
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/my-blogs">My Blogs</Link>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}
