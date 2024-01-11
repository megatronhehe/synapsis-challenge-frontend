import { PiCircleNotch } from "react-icons/pi";

export default function loading() {
	return (
		<div className="flex  items-center sm:pt-40 text-2xl min-h-screen text-gray-400 flex-col gap-6">
			<PiCircleNotch className="animate-spin" /> loading blog...
		</div>
	);
}
