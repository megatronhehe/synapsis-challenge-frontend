"use client";

import { PiHouse, PiHouseFill, PiUser, PiUserFill } from "react-icons/pi";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();

	return (
		<header className="font-light text-gray-600 border-b">
			<nav className="flex justify-center">
				<ul className="max-w-3xl w-full p-4 flex justify-between items-center text-sm">
					<li>
						<Link href="/" className="text-xl">
							Synapsis
							<span className="font-semibold text-blue-400">.Blogs</span>
						</Link>
					</li>
					<div className="flex gap-6 text-base">
						<li>
							<Link
								href="/"
								className={`pb-2 duration-200 ${
									pathname === "/" ? " text-blue-400 font-bold" : ""
								}`}
							>
								{pathname === "/" ? (
									<PiHouseFill className="block sm:hidden text-2xl" />
								) : (
									<PiHouse className="block sm:hidden text-2xl" />
								)}
								<span className="hidden sm:block">Home</span>
							</Link>
						</li>
						<li>
							<Link
								href="/users"
								className={`pb-2 duration-200 ${
									pathname === "/users" ? " text-blue-400 font-bold" : ""
								}`}
							>
								{pathname === "/users" ? (
									<PiUserFill className="block sm:hidden text-2xl" />
								) : (
									<PiUser className="block sm:hidden text-2xl" />
								)}
								<span className="hidden sm:block">Users</span>
							</Link>
						</li>
					</div>
				</ul>
			</nav>
		</header>
	);
}
