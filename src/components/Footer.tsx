import { PiArrowSquareOut } from "react-icons/pi";

export default function Footer() {
	return (
		<footer className="text-gray-500 w-full flex items-center justify-between p-8 border-t sm:flex-row flex-col  gap-1 mt-auto text-sm">
			<a
				href="https://satyafedev.netlify.app/"
				target="_blank"
				className="text-gray-400 hover:text-black duration-200 flex items-center gap-2"
			>
				Ida Bagus Satya Mahendra
				<PiArrowSquareOut className="text-lg" />
			</a>
			<div className="font-semibold text-blue-400">Synapsis.id</div>
			<div className="text-gray-400">frontend engineer intern challenge</div>
		</footer>
	);
}
